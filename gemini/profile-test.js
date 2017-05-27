gemini.suite('profile', (parent) => {
  parent.setUrl('src/web/components/global-nav/container/top-nav/profile/tests/gemini-profile.html');

  gemini.suite('profile', (suite) => {
    suite.setCaptureElements('body')
         .capture('open');
  });
});