gemini.suite('modal', (parent) => {
  parent.setUrl('src/web/components/modal/tests/gemini-modal.html');

  gemini.suite('modal', (suite) => {
       suite.setCaptureElements('body')
            .before(function(actions, find) {
                this.next = find('.hig__modal__close-button');
            })
            .capture('white')
            .capture('gray', function(actions, find) {
                actions.click(this.next);
            })
            .capture('slate', function(actions, find) {
                actions.click(this.next);
            })
            .capture('scrolling', function(actions, find) {
                actions.click(this.next);
            });
  });

});