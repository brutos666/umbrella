import { getRules } from './rules.js';
import { RULE_TYPE, NEW_LINE } from './constants.js';

/** @import {Rule} from "./rules.js" */

function convertHtmlToMarkdown(textValue) {
    const rules = getRules();
    const htmlNode = getDomNode(textValue);
    if (htmlNode.hasChildNodes()) {
        rules.forEach((rule) => convertNode(htmlNode, rule));
        return htmlNode.textContent;
    }
}

function getDomNode(textValue) {
    const dom = document.createElement('div');
    // Enlever les sauts de ligne qui ne sont pas entre des balises html
    const cleanTextValueWithNoNewLine = textValue.replace(/>\s*\n\s*</g, '><');
    // Enlever les scripts et les événements pour éviter les problèmes de sécurité si jamais on voulait afficher le résultat en html
    const cleanTextValueWithNoScript = cleanTextValueWithNoNewLine.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const cleanTextValueWithNoEvent = cleanTextValueWithNoScript.replace(/ on\w+="[^"]*"/g, '');
    dom.innerHTML = cleanTextValueWithNoEvent;
    return dom;
}
/**
 * Convertit le contenu en markdown
 * @param {HTMLElement} htmlNode
 * @param {Rule} rule - Règle de conversion
 */
function convertNode(htmlNode, rule) {
    if (rule.specificRuleType === RULE_TYPE.ReplaceElement) {
        const nodes = htmlNode.querySelectorAll(rule.htmlTag);
        nodes.forEach((element, key) => {
            const spanNode = document.createElement('span');
            spanNode.innerHTML = rule.markdownTag;
            element.replaceWith(spanNode);
        });
        return;
    }
    // Parcours des noeuds enfants et conversion si besoin
    htmlNode.childNodes.forEach((node, key) => {
        convertNode(node, rule);
        if (node.matches && node.matches(rule.htmlTag)) {
            // Modifie le contenu du noeud courant
            node.innerHTML = getElementValue(node, rule, key);
        }
    });
}
/**
 * Convertit le contenu en markdown
 * @param {HTMLElement} element - Element du DOM
 * @param {Rule} rule - Règle de conversion
 * @returns {boolean} false si pas de noeud à remplacer
 */
function getElementValue(element, rule, index) {
    const markdownTag = rule.markdownTag;
    const markdownTagEnd = rule.markdownTagEnd;
    const specificRuleType = rule.specificRuleType;
    let language;
    switch (specificRuleType) {
        case RULE_TYPE.Basic:
            return markdownTag + element.innerHTML + markdownTagEnd;
        case RULE_TYPE.Paragraphe:
            const divNode = document.createElement('div');
            divNode.innerHTML = markdownTag + element.innerHTML + markdownTagEnd + NEW_LINE + NEW_LINE;
            return divNode.innerHTML;
        case RULE_TYPE.ListIndex:
            const itemIndex = index + 1;
            return itemIndex + markdownTag + element.innerHTML + markdownTagEnd;
        case RULE_TYPE.Url:
            const href = element.getAttribute('href');
            if (href) {
                return `[${element.innerHTML}](${href})`;
            }
            return element.innerHTML;
        case RULE_TYPE.Image:
            const src = element.getAttribute('src');
            const alt = element.getAttribute('alt');
            if (src) {
                return `![${alt ? alt : ''}](${src})`;
            }
            return element.innerHTML;
        case RULE_TYPE.Code:
            language = getClassLanguage(element);
            return language.length === 0 ? '```' + element.innerHTML + '```' : '```' + language + NEW_LINE + element.innerHTML + NEW_LINE + '```' + NEW_LINE + NEW_LINE;
        case RULE_TYPE.Recursive:
            const copieElement = element.cloneNode(true);
            convertNode(copieElement, { ...rule, specificRuleType: RULE_TYPE.Basic });
            return copieElement.innerHTML;
        case RULE_TYPE.Lines:
            return rule.markdownTag + element.innerHTML.replace(/\n/g, rule.markdownTagEnd + NEW_LINE + rule.markdownTag) + rule.markdownTagEnd;
        case RULE_TYPE.Table:
            let widths = getColumnsWidth(element);
            const tableElement = element.cloneNode(true);
            updateWidths(tableElement, widths);
            addHeadSeparator(tableElement, widths);
            convertNode(tableElement, {
                htmlTag: 'thead > tr > th:last-child',
                markdownTag: '',
                markdownTagEnd: '|\n',
                specificRuleType: RULE_TYPE.Basic,
            });
            convertNode(tableElement, {
                htmlTag: 'tbody > tr > td:last-child',
                markdownTag: '',
                markdownTagEnd: '|\n',
                specificRuleType: RULE_TYPE.Basic,
            });
            convertNode(tableElement, {
                htmlTag: 'thead > tr > th',
                markdownTag: '|',
                markdownTagEnd: '',
                specificRuleType: RULE_TYPE.Basic,
            });
            convertNode(tableElement, {
                htmlTag: 'tbody  > tr > td',
                markdownTag: '|',
                markdownTagEnd: '',
                specificRuleType: RULE_TYPE.Basic,
            });
            return tableElement.innerHTML;
        default:
            break;
    }
    return;
}
/**
 * Donne la liste des tailles des colonnes
 * @param {Node} tableElement : noeud de type table
 * @returns {Array<Number>} liste des tailles max des colonnes
 */
function getColumnsWidth(tableElement) {
    let widths = [];
    tableElement.querySelectorAll('th').forEach((thElement) => {
        widths.push(thElement.textContent.length);
    });
    tableElement.querySelectorAll('tbody > tr').forEach((trElement) =>
        trElement.querySelectorAll('td').forEach((tdElement, index) => {
            let len = widths[index];
            if (len < tdElement.textContent.length) {
                widths[index] = tdElement.textContent.length;
            }
        })
    );
    return widths;
}
function updateWidths(tableElement, widths) {
    tableElement.querySelectorAll('th').forEach((column, index) => {
        const spaceLength = widths[index] - column.textContent.length;
        if (spaceLength > 0) {
            column.innerHTML = column.innerHTML + ' '.repeat(spaceLength);
        }
    });
    tableElement.querySelectorAll('tbody > tr').forEach((trElement) =>
        trElement.querySelectorAll('td').forEach((tdElement, index) => {
            const spaceLength = widths[index] - tdElement.textContent.length;
            if (spaceLength > 0) {
                tdElement.innerHTML = tdElement.innerHTML + ' '.repeat(spaceLength);
            }
        })
    );
}
function addHeadSeparator(tableElement, widths) {
    const headLine = tableElement.querySelector('thead > tr');
    const headSeparator = document.createElement('tr');
    headLine.childNodes.forEach((node, index) => {
        const td = document.createElement('td');
        td.innerHTML = '-'.repeat(widths[index]);
        headSeparator.insertAdjacentElement('beforeend', td);
    });
    tableElement.querySelector('tbody').insertAdjacentElement('afterbegin', headSeparator);
}

/**
 * Récupère le langage xxx présent dans la liste des classes sous la forme "language-xxx"
 * @param {Element} element : élément du DOM
 * @returns {string} chaîne contenant le langage ou une chaîne vide si pas de langage spécifié dans la liste des classes
 */
function getClassLanguage(element) {
    const languageClass = [...element.classList].find((className) => className.startsWith('language-'));
    return languageClass ? languageClass.substring(9) : '';
}
export default convertHtmlToMarkdown;
