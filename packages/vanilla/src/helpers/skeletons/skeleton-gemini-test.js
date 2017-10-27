gemini.suite('{{ name }}', (parent) => {
  parent.setUrl('src/basics/button/tests/gemini-button.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.test-container')
         .capture('basic {{ name}}');
  });
});