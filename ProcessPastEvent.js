(function () {
  'use strict';

  var savePastValue = function (event) {
    var richText = new RichText("toto");
  };

  let textArea = document.querySelector('input');
  textArea.addEventListener('paste', savePastValue);  
})();
