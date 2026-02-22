import getHtmlView from './homeView-html.js';
/**
 * Fonction de création de la page principale
 * @param {*} props - Liste des fonctions à appeler lors de la survenue d'un événement
 * @property {object}  defaults               - The default values for parties.
 * @property {function}  defaults.onPaste    - Fonction à appeler lors d'un coller
 * @property {function}  defaults.onInput    - Fonction à appeler lors d'un changement dans la zone de texte
 * @returns
 */
function createHomeView(props) {
  const root = document.createElement('div');
  root.innerHTML = getHtmlView();

  /** @HTMLTextAreaElement */
  const inputTextArea = root.querySelector('#input');
  /** @HTMLTextAreaElement */
  const outputTextArea = root.querySelector('#output');

  inputTextArea.addEventListener('paste', props.onPaste);
  inputTextArea.addEventListener('input', props.onInput);

  const updateInputWithPast = (pasteText) => {
    var initialText = inputTextArea.value,
      posStart = inputTextArea.selectionStart,
      posEnd = inputTextArea.selectionEnd,
      modifiedText =
        initialText.substring(0, posStart) +
        pasteText +
        initialText.substring(posEnd);

    inputTextArea.value = modifiedText;

    return modifiedText;
  };

  const updateOutput = (textContent) => {
    outputTextArea.value = textContent;
  };

  return { root, updateInputWithPast, updateOutput };
}

export default createHomeView;
