gemini.suite('password field', (parent) => {
  parent.setUrl('src/basics/form-elements/password-field/tests/gemini-password-field.html');

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('.test-group-default')
      .before(function (actions, find) {
        this.field = find('.test-group-default .hig__text-field__input');
      })
      .capture('plain')
      .capture('hovered', function (actions, _find) {
        actions.mouseMove(this.field);
      })
      .capture('focused', function (actions, _find) {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('with value', function (actions, _find) {
        actions.sendKeys(this.field, 'Now it has a value');
      });
  });

  gemini.suite('with password reveal button', (suite) => {
    suite.setCaptureElements('.test-group-reveal')
      .before(function (actions, find) {
        this.revealButtonfield = find('.test-group-reveal .hig__text-field__input');
      })
      .capture('with password reveal button', function (actions, _find) {
        actions.sendKeys(this.revealButtonfield, 'this-is-a-password-that-is-long-enough-to-overflow');
      })
      .capture('with password revealed', (actions, find) => {
        const passwordRevealButton = find('.test-group-reveal .hig__text-field__password-reveal-button');
        actions.mouseDown(passwordRevealButton);
      });
  });
});
