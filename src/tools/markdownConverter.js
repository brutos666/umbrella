import { getRules } from './rules.js';
import { SPECIFIC_RULE_TYPE, NEW_LINE } from './constants.js';

/** @import {Rule} from "./rules.js" */

function convertHtmlToMarkdown(textValue) {
    var rules = getRules(),
        htmlNode = getDomNode(textValue);
    if (htmlNode.hasChildNodes()) {
        rules.forEach((rule) => convertNode(htmlNode, rule));
        return htmlNode.textContent;
    }
}

function getDomNode(textValue) {
    var dom = document.createElement('div');
    dom.innerHTML = textValue;
    return dom;
}
/**
 * Convertit le contenu en markdown
 * @param {HTMLElement} htmlNode
 * @param {Rule} rule - Règle de conversion
 * @returns {boolean} false si pas de noeud à remplacer
 */
function convertNode(htmlNode, rule) {
    var nodes = htmlNode.querySelectorAll(rule.htmlTag);
    if (nodes.length === 0) {
        return false;
    }
    nodes.forEach((element, key) => {
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
    var markdownTag = rule.markdownTag,
        specificRuleType = rule.specificRuleType,
        value,
        language;
    switch (specificRuleType) {
        case SPECIFIC_RULE_TYPE.Basic:
            value = markdownTag + element.innerHTML + (rule.surround ? markdownTag : NEW_LINE);
            break;
        case SPECIFIC_RULE_TYPE.Balise:
            value = '&lt;' + markdownTag + '&gt;' + element.innerHTML + '&lt;/' + markdownTag + '&gt;';
            break;
        case SPECIFIC_RULE_TYPE.Index:
            value = index + markdownTag + element.innerHTML + NEW_LINE;
            break;
        case SPECIFIC_RULE_TYPE.Language:
            language = getClassLanguage(element);
            if (language.length === 0) {
                value = markdownTag + element.innerHTML + markdownTag;
            } else {
                value = markdownTag + language + NEW_LINE + element.innerHTML + NEW_LINE + markdownTag + NEW_LINE;
            }
            break;
        case SPECIFIC_RULE_TYPE.NewLine:
            value = element.innerHTML + NEW_LINE;
            break;
        default:
            break;
    }
    return value;
}

/**
 * Récupère le langage xxx présent dans la liste des classes sous la forme "language-xxx"
 * @param {Element} element : élément du DOM
 * @returns {string} chaîne contenant le langage ou une chaîne vide si pas de langage spécifié dans la liste des classes
 */
function getClassLanguage(element) {
    var languageClass = element.classList.values().find((className) => className.startsWith('language-'));

    return languageClass ? languageClass.substring(9) : '';
}
export default convertHtmlToMarkdown;
