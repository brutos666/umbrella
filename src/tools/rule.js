/**
 * @typedef Rule
 * @type { Object }
 * @property {string} htmlTag - balise html
 * @property {string} markdownTag - balise markdown
 * @property {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 */
/**
 * Règle de remplacement d'une balise HTML par une balise markdown
 * @param {string} htmlTag -  balise html
 * @param {string} markdownTag - balise markdown
 * @param {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @returns {Rule}
 */
function getRule(htmlTag, markdownTag, surround) {
  return { htmlTag, markdownTag, surround };
}
export default getRule;
