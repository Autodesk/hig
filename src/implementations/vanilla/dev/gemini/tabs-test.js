gemini.suite('tabs', (parent) => {
  parent.setUrl('src/components/tabs/tests/gemini-tabs.html');

  gemini.suite('tabs', (suite) => {
    suite.setCaptureElements('.hig__tabs')
      .capture('tabs');
  });
});
