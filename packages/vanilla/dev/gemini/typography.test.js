gemini.suite('typography', () => {
  gemini.suite('default', (suite) => {
    suite.setUrl(
      'src/basics/typography/tests/tests-typography.html'
    );

    suite
      .setCaptureElements('body')
      .capture('default');
  });

  gemini.suite('sizing', (suite) => {
    suite.setUrl(
      'src/basics/typography/tests/tests-typography-sizing.html'
    );

    suite
      .setCaptureElements('body')
      .capture('default');
  });

  gemini.suite('colors', (suite) => {
    suite.setUrl(
      'src/basics/typography/tests/tests-typography-colors.html'
    );

    suite
      .setCaptureElements('body')
      .capture('default');
  });
});
