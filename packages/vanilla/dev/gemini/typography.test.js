gemini.suite('typography', (parent) => {
  parent.setUrl(
    'src/basics/typography/tests/tests-typography.html'
  );

  gemini.suite('default', (suite) => {
    suite.setCaptureElements('body').capture('default');
  });
});
