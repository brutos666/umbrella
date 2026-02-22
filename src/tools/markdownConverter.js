import { getRules, INDEX } from './rules.js';

/** @import {Rule} from "./rules.js" */

function convertHtmlToMarkdown(textValue) {
  var rules = getRules(),
    htmlNode = getDomNode(textValue);
  if (htmlNode.hasChildNodes()) {
    rules.forEach((rule) => convertNodeToMarkdown(htmlNode, rule));
    return htmlNode.textContent;
  }
}

function getDomNode(textValue) {
  var dom = document.createElement('div'),
    cleanedString = textValue
      .trim()
      .replace(/\r?\n|\r/g, '') // removes multiple lines
      .replace(/\s\s+/g, ''); // removes extra white spaces
  dom.innerHTML = cleanedString;
  return dom;
}

/**
 * Converti le contenu du noeud en markdown
 * @param {HTMLElement} htmlNode - noeud HTML
 * @param {Rule} rule - Règle de conversion
 */
function convertNodeToMarkdown(htmlNode, rule) {
  var htmlTag = rule.htmlTag,
    beginTag = rule.markdownTag,
    endTag = rule.surround ? beginTag : '\n',
    index = 1;
  if (htmlTag.indexOf(INDEX) !== -1) {
    while (convertNodeForIndex(htmlNode, htmlTag, beginTag, endTag, index)) {
      index++;
    }
  } else {
    convertNodeNoIndex(htmlNode, htmlTag, beginTag, endTag);
  }
}

/**
 * Converti le contenu en markdown
 * @param {HTMLElement} htmlNode
 * @param {String} htmlTag - balise html
 * @param {String} beginTag - balise début markdown
 * @param {null|String} endTag  - balise fin markdown
 * @returns {boolean} false si pas de noeud à remplacer
 */
function convertNodeNoIndex(htmlNode, htmlTag, beginTag, endTag) {
  var nodes = htmlNode.querySelectorAll(htmlTag);
  if (nodes.length === 0) {
    return false;
  }
  nodes.forEach((element) => {
    element.innerHTML = beginTag + element.innerHTML + endTag;
  });
  return true;
}
/**
 * Converti le contenu en markdown en remplaçant INDEX par l'index
 * @param {HTMLElement} htmlNode
 * @param {String} htmlTag - balise html
 * @param {String} beginTag - balise début markdown
 * @param {null|String} endTag  - balise fin markdown
 * @param {Number} index
 * @returns {boolean} false si pas de noeud à remplacer
 */
function convertNodeForIndex(htmlNode, htmlTag, beginTag, endTag, index) {
  var htmlTagIndex = htmlTag.replace(INDEX, index),
    beginTagIndex = beginTag.replace(INDEX, index);
  return convertNodeNoIndex(htmlNode, htmlTagIndex, beginTagIndex, endTag);
}

export default convertHtmlToMarkdown;
