gemini.suite('text field', (parent) => {
  parent.setUrl('src/basics/form-elements/text-field/tests/gemini-text-field.html');

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('.test-group-default')
      .before((actions, find) => {
        this.field = find('.test-group-default .hig__text-field__input');
      })
      .capture('plain')
      .capture('hovered', (actions, _find) => {
        actions.mouseMove(this.field);
      })
      .capture('focused', (actions, _find) => {
        actions.mouseDown(this.field);
        actions.mouseUp(this.field);
      })
      .capture('with value', (actions, _find) => {
        actions.sendKeys(this.field, 'Now it has a value');
      });
  });

  gemini.suite('with clear button', (suite) => {
    suite.setCaptureElements('.test-group-clear-button')
      .capture('plain');
  });

  gemini.suite('with icon', (suite) => {
    suite.setCaptureElements('.test-group-icon')
      .capture('plain');
  });

  gemini.suite('disabled', (suite) => {
    suite.setCaptureElements('.test-group-disabled')
      .capture('disabled');
  });

  gemini.suite('disabled with value', (suite) => {
    suite.setCaptureElements('.test-group-disabled-value')
      .capture('disabled with value', (actions) => {
        actions.click('#test-group-disabled-value');
      });
  });

  gemini.suite('errors', (suite) => {
    suite.setUrl('src/basics/form-elements/text-field/tests/gemini-text-field-with-errors.html');

    gemini.suite('basic', (errorSuite) => {
      errorSuite.setCaptureElements('.test-group-with-errors')
        .capture('basic');
    });

    gemini.suite('styling instructions', (errorSuite) => {
      errorSuite.setCaptureElements('.test-group-with-instructional-errors')
        .capture('styling instructions');
    });

    gemini.suite('errors replacing instructions', (errorSuite) => {
      errorSuite.setCaptureElements('.test-group-with-hidden-instructions')
        .capture('errors replacing instructions');
    });
  });
});
