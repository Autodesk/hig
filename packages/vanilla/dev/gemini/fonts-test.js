gemini.suite('font weights', (suite) => {
  suite.setUrl(
    'src/basics/fonts/tests/tests-font-weights.html'
  );

  suite.setCaptureElements('body').capture('default');
});
