gemini.suite('password field', (parent) => {
  parent.setUrl('src/web/basics/form-elements/password-field/tests/gemini-password-field.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.test-group-default')
            .before(function(actions, find) {
                this.field = find('.test-group-default .hig__text-field__input');
            })
            .capture('plain')
            .capture('hovered', function(actions, find) {
                actions.mouseMove(this.field);
            })
            .capture('focused', function(actions, find) {
                actions.mouseDown(this.field);
                actions.mouseUp(this.field);
            })
            .capture('with value', function(actions, find) {
                actions.sendKeys(this.field, 'Now it has a value');
            });
  });

  gemini.suite('with password reveal button', (suite) => {
        suite.setCaptureElements('.test-group-reveal')
            .before(function(actions, find) {
                this.revealButtonfield = find('.test-group-reveal .hig__text-field__input');
            })
            .capture('with password reveal button', function(actions, find) {
                actions.sendKeys(this.revealButtonfield, '1password');
            })
            .capture('with password revealed', function(actions, find) {
                const passwordRevealButton = find('.test-group-reveal .hig__text-field__password-reveal-button');
                actions.mouseDown(passwordRevealButton);
            });
  });

});