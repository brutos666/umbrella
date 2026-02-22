/** @import {SPECIFIC_RULE_TYPE} from "./constants.js" */
/**
 * @typedef Rule
 * @type { Object }
 * @property {string} htmlTag - balise html
 * @property {string} markdownTag - balise markdown
 * @property {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @property {SPECIFIC_RULE_TYPE} replacementType - type de remplacement
 */
/**
 * Règle de remplacement d'une balise HTML par une balise markdown
 * @param {string} htmlTag -  balise html
 * @param {string} markdownTag - balise markdown
 * @param {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @param {SPECIFIC_RULE_TYPE} replacementType - type de remplacement
 * @returns {Rule}
 */
function getRule(htmlTag, markdownTag, surround, replacementType) {
  return { htmlTag, markdownTag, surround, replacementType };
}
export default getRule;
