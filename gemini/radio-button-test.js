gemini.suite('radio-button', (parent) => {
  parent.setUrl('src/web/basics/form-elements/radio-button/tests/gemini-radio-button.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.test-container')
         .capture('basic radio-button');
  });
});