gemini.suite('side-nav', (parent) => {
  parent.setUrl('src/components/global-nav/side-nav/tests/gemini-side-nav.html');

  gemini.suite('side-nav', (suite) => {
    suite.setCaptureElements('body')
         .capture('open');
  });
});