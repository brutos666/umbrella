import { RULE_TYPE, TO_REPLACE } from './constants.js';

/**
 * @typedef Rule
 * @type { Object }
 * @property {string} htmlTag - balise html
 * @property {string} markdownTag - balise markdown
 * @property {string} markdownTagEnd - balise de fin markdown
 * @property {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @property {RULE_TYPE} specificRuleType - type de règle
 */

/**
 * Récupère la liste des règles de remplacements des balises html
 * @returns {Array<Rule>}
 */
function getRules() {
    return [
        { htmlTag: 'hr', markdownTag: '---', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'h1', markdownTag: '# ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'h2', markdownTag: '## ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'h3', markdownTag: '### ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'h4', markdownTag: '#### ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'h5', markdownTag: '##### ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'h6', markdownTag: '###### ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'p', markdownTag: '', markdownTagEnd: '', specificRuleType: RULE_TYPE.Paragraphe },
        { htmlTag: 'b', markdownTag: '**', markdownTagEnd: '**', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'strong', markdownTag: '**', markdownTagEnd: '**', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'i', markdownTag: '*', markdownTagEnd: '*', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'em', markdownTag: '*', markdownTagEnd: '*', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'del', markdownTag: '~~', markdownTagEnd: '~', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'sup', markdownTag: '&lt;sup&gt;', markdownTagEnd: '&lt;/sup&gt;', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'sub', markdownTag: '&lt;sub&gt;', markdownTagEnd: '&lt;/sub&gt;', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'div', markdownTag: '', markdownTagEnd: '\n', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'ul > li', markdownTag: '- ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'ol > li', markdownTag: '. ', markdownTagEnd: '', specificRuleType: RULE_TYPE.ListIndex },
        { htmlTag: 'li > ul', markdownTag: '\n', markdownTagEnd: '', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'li > ol', markdownTag: '\n', markdownTagEnd: '', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'ul:not(li > ul)', markdownTag: '', markdownTagEnd: '\n\n', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'ol:not(li > ol)', markdownTag: '', markdownTagEnd: '\n', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: '* > li:not(:last-child)', markdownTag: '', markdownTagEnd: '\n', specificRuleType: RULE_TYPE.Basic },
        { htmlTag: 'li', markdownTag: '    ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Recursive },
        { htmlTag: 'blockquote', markdownTag: '> ', markdownTagEnd: '', specificRuleType: RULE_TYPE.Lines },
        { htmlTag: 'a', markdownTag: '', markdownTagEnd: '', specificRuleType: RULE_TYPE.Url },
        { htmlTag: 'img', markdownTag: '', markdownTagEnd: '', specificRuleType: RULE_TYPE.Image },
        { htmlTag: 'code', markdownTag: '', markdownTagEnd: '', specificRuleType: RULE_TYPE.Code },
        { htmlTag: 'table', markdownTag: '', markdownTagEnd: '', specificRuleType: RULE_TYPE.Table },
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
