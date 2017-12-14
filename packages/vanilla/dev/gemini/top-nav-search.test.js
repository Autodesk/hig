gemini.suite('top nav search', (parent) => {
  parent.setUrl(
    'src/components/global-nav/top-nav/search/tests/gemini-top-nav-search.html'
  );

  gemini.suite('default', (suite) => {
    suite.setCaptureElements('body').capture('default');
  });
});
