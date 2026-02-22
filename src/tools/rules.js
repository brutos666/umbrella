const INDEX = '#i';
/**
 * @typedef Rule
 * @type { Object }
 * @property {string} htmlTag - balise html
 * @property {string} markdownTag - balise markdown
 * @property {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 */

/**
 * Récupère la liste des règles de remplacements des balises html
 * @returns {Array<Rule>}
 */
function getRules() {
  return [
    getRule('h1', '# ', false),
    getRule('h2', '## ', false),
    getRule('h3', '### ', false),
    getRule('h4', '#### ', false),
    getRule('h5', '##### ', false),
    getRule('h6', '###### ', false),
    getRule('b', '**', true),
    getRule('strong', '**', true),
    getRule('i', '*', true),
    getRule('em', '*', true),
    getRule('del', '~~', true),
    getRule('sup', '<sup>', true),
    getRule('sub', '<sub>', true),
    getRule('ul > li', '- ', false),
    getRule('ol > li:nth-of-type(' + INDEX + ')', INDEX + '. ', false),
  ];
}

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
export { getRules, INDEX };
