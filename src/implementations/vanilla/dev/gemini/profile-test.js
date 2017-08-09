gemini.suite('profile', (parent) => {
  parent.setUrl('src/components/global-nav/top-nav/profile/tests/gemini-profile.html');

  gemini.suite('profile', (suite) => {
    suite.setCaptureElements('body')
         .capture('open');
  });
});