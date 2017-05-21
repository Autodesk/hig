gemini.suite('button', (suite) => {
  suite.setUrl('src/web/basics/button/tests/tests-button.html')
       .setCaptureElements('.test-container')
       .capture('regular button');
});