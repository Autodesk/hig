gemini.suite('avatar', (parent) => {
  parent.setUrl('src/components/avatar/tests/tests-avatar.html');

  gemini.suite('basic', (suite) => {
    suite.setCaptureElements('.test-container')
         .capture('basic avatar');
  });
});