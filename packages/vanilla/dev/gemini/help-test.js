gemini.suite('help', (parent) => {
  parent.setUrl('src/components/global-nav/top-nav/help/tests/gemini-help.html');

  gemini.suite('help', (suite) => {
    suite.setCaptureElements('body')
      .capture('open');
  });
});
