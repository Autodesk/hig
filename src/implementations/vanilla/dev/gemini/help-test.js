gemini.suite('help', (parent) => {
  parent.setUrl('src/components/global-nav/top-nav/help/tests/gemini-help.html');

  gemini.suite('help-button', (suite) => {
    suite.setCaptureElements('.hig__global-nav__top-nav')
         .capture('regular help button');
  });
});