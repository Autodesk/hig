gemini.suite('subnav tabs', (parent) => {
  parent.setUrl('src/components/global-nav/sub-nav/tabs/tests/gemini-tabs.html');

  gemini.suite('subnav tabs', (suite) => {
    suite.setCaptureElements('.hig__global-nav__sub-nav__tabs')
      .capture('subnav tabs');
  });
});
