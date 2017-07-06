gemini.suite('text area', (parent) => {
  parent.setUrl('src/web/basics/form-elements/text-area/tests/gemini-text-area.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.test-mount')
            .before(function(actions, find) {
                this.field = find('.hig__text-area__field');
            })
            .capture('plain')
            .capture('hovered', function(actions, find) {
                actions.mouseMove(this.field);
            })
            .capture('focused', function(actions, find) {
                actions.mouseDown(this.field);
            })
            .capture('with value', function(actions, find) {
                actions.sendKeys(this.field, 'Now it has a value');
            });
  });

});