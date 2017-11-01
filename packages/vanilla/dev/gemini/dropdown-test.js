gemini.suite('dropdown', (parent) => {
  parent.setUrl('src/basics/form-elements/dropdown/tests/gemini-dropdown.html');

  gemini.suite('default', (suite) => {
      suite.setCaptureElements('.test-mount-default')
          .capture('default')
          .capture('open', (actions, find) => {
            const field = find('.test-mount-default .hig__text-field__input');
            actions.mouseDown(field);
            actions.mouseUp(field);
          })
  });

  gemini.suite('disabled', (suite) => {
      suite.setCaptureElements('.test-mount-disabled')
          .capture('disabled');
  });

});