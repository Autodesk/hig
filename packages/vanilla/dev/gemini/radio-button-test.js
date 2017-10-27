gemini.suite('radio-button', (parent) => {
  parent.setUrl('src/basics/form-elements/radio-button/tests/gemini-radio-button.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.test-container')
         .capture('basic radio-button');
  });
});