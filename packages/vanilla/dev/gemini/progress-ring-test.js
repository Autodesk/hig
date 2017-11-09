gemini.suite('progress-ring', (parent) => {
  parent.setUrl('src/components/progress-ring/tests/gemini-progress-ring.html');

  gemini.suite('determinate', (suite) => {
    suite.setCaptureElements('.determinate')
      .capture('determinate progress-ring');
  });

  gemini.suite('indeterminate', (suite) => {
    suite.setCaptureElements('.indeterminate')
      .capture('indeterminate progress-ring');
  });
});
