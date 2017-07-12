gemini.suite('dropdown', (parent) => {
  parent.setUrl('src/web/basics/form-elements/dropdown/tests/gemini-dropdown.html');

  gemini.suite('default', (suite) => {
       suite.setCaptureElements('.test-mount-default')
            .capture('default');
  });

  gemini.suite('open', (suite) => {
       suite.setCaptureElements('.test-mount-open')
            .capture('open');
  });

  gemini.suite('disabled', (suite) => {
       suite.setCaptureElements('.test-mount-disabled')
            .capture('disabled');
  });

});