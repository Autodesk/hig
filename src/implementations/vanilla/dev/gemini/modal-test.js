gemini.suite('modal', (parent) => {
  parent.setUrl('src/components/modal/tests/gemini-modal.html');

  gemini.suite('modal', (suite) => {
       suite.setCaptureElements('body')
            .before(function(actions, find) {
                this.next = find('.hig__modal__close-button');
            })
            .capture('standard')
            .capture('alternate', function(actions, find) {
                actions.click(this.next);
            })
            .capture('scrollable', function(actions, find) {
                actions.click(this.next);
            })
  });

});
