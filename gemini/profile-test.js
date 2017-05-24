gemini.suite('profile', (parent) => {
  parent.setUrl('src/web/components/global-nav/tests/gemini-global-nav.html');

  gemini.suite('profile-image', (suite) => {
    suite.setCaptureElements('.hig__global-nav__profile')
         .capture('profile-image');
  });
});