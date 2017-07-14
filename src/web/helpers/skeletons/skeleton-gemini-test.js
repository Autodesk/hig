gemini.suite('{{ name }}', (parent) => {
  parent.setUrl('src/web/basics/button/tests/gemini-button.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.test-container')
         .capture('basic {{ name}}');
  });
});