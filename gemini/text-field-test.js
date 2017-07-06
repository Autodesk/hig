gemini.suite('text field', (parent) => {
  parent.setUrl('src/web/basics/form-elements/text-field/tests/gemini-text-field.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.test-group')
            .before(function(actions, find) {
                this.field = find('.hig__text-field__input');
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