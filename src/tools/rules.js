import { SPECIFIC_RULE_TYPE } from './constants.js';

/**
 * @typedef Rule
 * @type { Object }
 * @property {string} htmlTag - balise html
 * @property {string} markdownTag - balise markdown
 * @property {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @property {SPECIFIC_RULE_TYPE} specificRuleType - type de règle
 */

/**
 * Récupère la liste des règles de remplacements des balises html
 * @returns {Array<Rule>}
 */
function getRules() {
    return [
        getRule('h1', '# ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('h2', '## ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('h3', '### ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('h4', '#### ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('h5', '##### ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('h6', '###### ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('b', '**', true, SPECIFIC_RULE_TYPE.Basic),
        //getRule('strong', '__', true, SPECIFIC_RULE_TYPE.Basic),
        getRule('strong', '**', true, SPECIFIC_RULE_TYPE.Basic),
        getRule('i', '*', true, SPECIFIC_RULE_TYPE.Basic),
        //getRule('em', '_', true, SPECIFIC_RULE_TYPE.Basic),
        getRule('em', '*', true, SPECIFIC_RULE_TYPE.Basic),
        getRule('del', '~~', true, SPECIFIC_RULE_TYPE.Basic),
        getRule('sup', 'sup', true, SPECIFIC_RULE_TYPE.Balise),
        getRule('sub', 'sub', true, SPECIFIC_RULE_TYPE.Balise),
        getRule('ul > li', '- ', false, SPECIFIC_RULE_TYPE.Basic),
        getRule('ol > li', '. ', false, SPECIFIC_RULE_TYPE.Index),
        getRule('code', '```', true, SPECIFIC_RULE_TYPE.Language),
        // Les règles de retour à la ligne
        getRule('div', '', false, SPECIFIC_RULE_TYPE.NewLine),
    ];
}

/**
 * Règle de remplacement d'une balise HTML par une balise markdown
 * @param {string} htmlTag -  balise html
 * @param {string} markdownTag - balise markdown
 * @param {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @param {string|null} replacementType - indique un type de remplacement particulier
 * @returns {Rule}
 */
function getRule(htmlTag, markdownTag, surround, replacementType) {
    return { htmlTag, markdownTag, surround, specificRuleType: replacementType };
}
export { getRules };
