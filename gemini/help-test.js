gemini.suite('help', (parent) => {
  parent.setUrl('src/web/components/global-nav/top-nav/help/tests/gemini-help.html');

  gemini.suite('help-button', (suite) => {
    suite.setCaptureElements('body')
         .capture('regular help button');
  });
});