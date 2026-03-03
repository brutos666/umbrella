import { SPECIFIC_RULE_TYPE } from './constants.js';

/**
 * @typedef Rule
 * @type { Object }
 * @property {string} htmlTag - balise html
 * @property {string} markdownTag - balise markdown
 * @property {string} markdownTagEnd - balise de fin markdown
 * @property {boolean} surround - indique si la balise entoure l'expression (** bold ** ou # Title)
 * @property {SPECIFIC_RULE_TYPE} specificRuleType - type de règle
 */

/**
 * Récupère la liste des règles de remplacements des balises html
 * @returns {Array<Rule>}
 */
function getRules() {
    return [
        { htmlTag: 'hr', markdownTag: '---\n\n', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.ReplaceElement },
        //{ htmlTag: 'br', markdownTag: '\n', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.ReplaceElement },
        { htmlTag: 'h1', markdownTag: '# ', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'h2', markdownTag: '## ', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'h3', markdownTag: '### ', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'h4', markdownTag: '#### ', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'h5', markdownTag: '##### ', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'h6', markdownTag: '###### ', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'blockquote', markdownTag: '> ', markdownTagEnd: '\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'b', markdownTag: '**', markdownTagEnd: '**', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'strong', markdownTag: '**', markdownTagEnd: '**', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'i', markdownTag: '*', markdownTagEnd: '*', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'em', markdownTag: '*', markdownTagEnd: '*', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'del', markdownTag: '~~', markdownTagEnd: '~', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'sup', markdownTag: '&lt;sup&gt;', markdownTagEnd: '&lt;/sup&gt;', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'sub', markdownTag: '&lt;sub&gt;', markdownTagEnd: '&lt;/sub&gt;', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'p', markdownTag: '', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'div', markdownTag: '', markdownTagEnd: '\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'ul > li', markdownTag: '- ', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'ol > li', markdownTag: '. ', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.Index },
        { htmlTag: '* > li:not(:last-child)', markdownTag: '', markdownTagEnd: '\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        //{ htmlTag: 'ul:not(:first-of-type)', markdownTag: '', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'ul', markdownTag: '', markdownTagEnd: '\n\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'ol:not(:first-of-type)', markdownTag: '', markdownTagEnd: '\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        { htmlTag: 'li', markdownTag: '    ', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.Recursive },
        { htmlTag: 'a', markdownTag: '[', markdownTagEnd: ']', specificRuleType: SPECIFIC_RULE_TYPE.Source },
        { htmlTag: 'img', markdownTag: '![', markdownTagEnd: ']', specificRuleType: SPECIFIC_RULE_TYPE.Image },
        { htmlTag: 'code', markdownTag: '```', markdownTagEnd: '```', specificRuleType: SPECIFIC_RULE_TYPE.Language },
        { htmlTag: 'table', markdownTag: '', markdownTagEnd: '|\n', specificRuleType: SPECIFIC_RULE_TYPE.Table },
        //{ htmlTag: 'table > * > tr', markdownTag: '', markdownTagEnd: '|\n', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        //{ htmlTag: 'table > thead > tr > th', markdownTag: '|', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
        //{ htmlTag: 'table > tbody  > tr > td', markdownTag: '|', markdownTagEnd: '', specificRuleType: SPECIFIC_RULE_TYPE.Basic },
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
