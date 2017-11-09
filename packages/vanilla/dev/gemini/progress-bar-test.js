gemini.suite('progress-bar', (parent) => {
  parent.setUrl('src/components/progress-bar/tests/gemini-progress-bar.html');

  gemini.suite('determinate', (suite) => {
    suite.setCaptureElements('.determinate')
      .capture('determinate progress-bar');
  });

  gemini.suite('indeterminate', (suite) => {
    suite.setCaptureElements('.indeterminate')
      .capture('indeterminate progress-bar');
  });
});
