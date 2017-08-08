gemini.suite('flyout', (suite) => {
  suite.setUrl('src/web/basics/flyout/tests/gemini-flyout.html')
       .setCaptureElements('.testContainer')
       .capture('open');
});