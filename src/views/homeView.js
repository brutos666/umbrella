import getHtmlView from './homeView-html.js';
/**
 * Fonction de création de la page principale
 * @param {*} props - Liste des fonctions à appeler lors de la survenue d'un événement
 * @property {object}  defaults               - The default values for parties.
 * @property {function}  defaults.onPaste    - Fonction à appeler lors d'un coller
 * @property {function}  defaults.onInput    - Fonction à appeler lors d'un changement dans la zone de texte
 * @property {function}  defaults.onSampleClick    - Fonction à appeler lors du click sur le bouton d'exemple
 * @returns
 */
function createHomeView(props) {
  const root = document.createElement('div');
  root.innerHTML = getHtmlView();

  /** @HTMLTextAreaElement */
  const inputTextArea = root.querySelector('#input');
  
  /** @HTMLTextAreaElement */
  const outputTextArea = root.querySelector('#output');

  /** @HTMLButtonElement */
  const sampleButton = root.querySelector('#sample-button');

  inputTextArea.addEventListener('paste', props.onPaste);
  inputTextArea.addEventListener('input', props.onInput);
  sampleButton.addEventListener('click', props.onSampleClick);

  const updateInputWithPast = (pasteText) => {
    const initialText = inputTextArea.value;
    const posStart = inputTextArea.selectionStart;
    const posEnd = inputTextArea.selectionEnd;
    const modifiedText = initialText.substring(0, posStart) + pasteText + initialText.substring(posEnd);

    inputTextArea.value = modifiedText;

    return modifiedText;
  };
  const updateInput = (textContent) => {
    inputTextArea.value = textContent;
  };
  const updateOutput = (textContent) => {
    outputTextArea.value = textContent;
  };

  return { root, updateInputWithPast, updateInput, updateOutput };
}

export default createHomeView;
