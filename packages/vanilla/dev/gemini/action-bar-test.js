gemini.suite('action-bar', (parent) => {
  parent.setUrl('src/components/action-bar/tests/tests-action-bar.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.test-container').capture('action-bar');
  });
});
