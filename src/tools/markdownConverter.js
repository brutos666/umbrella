import { getRules } from './rules.js';
import { SPECIFIC_RULE_TYPE, NEW_LINE } from './constants.js';

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
    // Enlever les scripts et les événeements pour éviter les problèmes de sécurité si jamais on voulait afficher le résultat en html
    const cleanTextValueWithNoScript = cleanTextValueWithNoNewLine.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');    
    const cleanTextValueWithNoEvent = cleanTextValueWithNoScript.replace(/ on\w+="[^"]*"/g, '');
    dom.innerHTML = cleanTextValueWithNoEvent;
    return dom;
}
/**
 * Convertit le contenu en markdown
 * @param {HTMLElement} htmlNode
 * @param {Rule} rule - Règle de conversion
 * @returns {boolean} false si pas de noeud à remplacer
 */
function convertNode(htmlNode, rule) {
    const nodes = htmlNode.querySelectorAll(rule.htmlTag);
    if (nodes.length === 0) {
        return false;
    }
    nodes.forEach((element, key) => {
        if (rule.specificRuleType === SPECIFIC_RULE_TYPE.ReplaceElement) {
            const spanNode = document.createElement('span');
            spanNode.innerHTML = rule.markdownTag;
            element.replaceWith(spanNode);
            return;
        }
        element.innerHTML = getElementValue(element, rule, key);
    });
    return true;
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
        case SPECIFIC_RULE_TYPE.Basic:
            return markdownTag + element.innerHTML + markdownTagEnd;
        case SPECIFIC_RULE_TYPE.Index:
            const itemIndex = index + 1;
            return itemIndex + markdownTag + element.innerHTML + markdownTagEnd;
        case SPECIFIC_RULE_TYPE.Source:
            const href = element.getAttribute('href');
            if (href) {
                return `${markdownTag + element.innerHTML + markdownTagEnd}(${href})`;
            }
            return markdownTag + element.innerHTML + markdownTagEnd;
        case SPECIFIC_RULE_TYPE.Image:
            const src = element.getAttribute('src');
            const alt = element.getAttribute('alt');
            if (src) {
                return `${markdownTag}${alt ? alt : ''}${markdownTagEnd}(${src})`;
            }
            return markdownTag + element.innerHTML + markdownTagEnd;
        case SPECIFIC_RULE_TYPE.Language:
            language = getClassLanguage(element);
            return language.length === 0 ? (markdownTag + element.innerHTML + markdownTagEnd) : (markdownTag + language + NEW_LINE + element.innerHTML + NEW_LINE + markdownTagEnd + NEW_LINE + NEW_LINE);
        default:
            break;
    }
    return;
}

/**
 * Récupère le langage xxx présent dans la liste des classes sous la forme "language-xxx"
 * @param {Element} element : élément du DOM
 * @returns {string} chaîne contenant le langage ou une chaîne vide si pas de langage spécifié dans la liste des classes
 */
function getClassLanguage(element) {
    const languageClass = element.classList.values().find((className) => className.startsWith('language-'));

    return languageClass ? languageClass.substring(9) : '';
}
export default convertHtmlToMarkdown;
