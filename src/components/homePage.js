import createHomeView from '../views/homeView.js';
import convertHtmlToMarkdown from '../tools/markdownConverter.js';

/**
 * Cette classe est responsable de la création de la vue et de sa mise à jour.
 * Elle contient les propriétés du modèle de la vue et c'est bien ici que le modèle doit être mis à jour.
 * Lors de sa mise à jour, il doit indiquer à la vue de se mettre à jour.
 * @returns la vue
 */
function createHomePage() {
  const onPaste = (event) => {
    const transfer = event.clipboardData || event.dataTransfer;
    if (transfer.types.indexOf('text/html') > -1) {
      var htmlText = transfer.getData('text/html'),
        modifiedText = view.updateInputWithPast(htmlText);
      // This is necessary to prevent the current document selection from being written to the clipboard.
      event.preventDefault();
      view.updateOutput(convertHtmlToMarkdown(modifiedText));
    }
  };
  const onInput = (event) => {
    var initialText = event.target.value;
    view.updateOutput(convertHtmlToMarkdown(initialText));
  };

  const viewProps = { onPaste, onInput };
  const view = createHomeView(viewProps);
  return view;
}

export default createHomePage;
