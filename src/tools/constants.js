/**
 * Enum pour le type de remplacement
 * @readonly
 * @enum {string}
 */
const RULE_TYPE = {
    ListIndex: 'ListIndex', // Règle dédiée au traitement des listes avec numéros
    Code: 'Code', // Règle dédiée aux blocks de code
    Image: 'Image', // Règle dédiée aux images
    Url: 'Url', // Règle particulière pour les url
    Table: 'Table', // Règle dédiée aux tableaux
    Recursive: 'Recursive', // Appliquer la règle à l'élément trouvé et à ses enfants
    Lines: 'Lines', // traite toutes les lignes contenus dans la balise
    Basic: 'Basic', // Règle classique d'ajout de texte avant et/ou après le contenu du neoud
    ReplaceElement: 'ReplaceElement', // Remplace le noeud par un <span> contenant le texte avant et/ou après
    Paragraphe: 'Paragraphe', // Remplace le noeud par un paragraphe en ajoutant le texte avant et après
};

const NEW_LINE = '\n';
const TO_REPLACE = '#!?#';

export { RULE_TYPE, NEW_LINE, TO_REPLACE };
