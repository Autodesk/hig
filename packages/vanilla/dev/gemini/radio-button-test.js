gemini.suite('radio-button', (parent) => {
  parent.setUrl('src/basics/form-elements/radio-button/tests/gemini-radio-button.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.tests-radiobutton')
         .capture('basic radio-button');
  });

  gemini.suite('checked', (suite) => {
    suite.setCaptureElements('.tests-radiobutton1')
         .capture('checked radio-button');
  });

  gemini.suite('required', (suite) => {
    suite.setCaptureElements('.tests-radiobutton2')
         .capture('required radio-button');
  });

  gemini.suite('disabled', (suite) => {
    suite.setCaptureElements('.tests-radiobutton3')
         .capture('disabled radio-button');
  });

  gemini.suite('disabled and checked', (suite) => {
    suite.setCaptureElements('.tests-radiobutton4')
         .capture('disabled and checked radio-button');
  });


});