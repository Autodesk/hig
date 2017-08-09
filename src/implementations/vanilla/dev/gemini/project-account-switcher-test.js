gemini.suite('project-account-switcher', (parent) => {
  parent.setUrl('src/components/global-nav/top-nav/project-account-switcher/tests/gemini-project-account-switcher.html');

  gemini.suite('project-account-switcher', (suite) => {
    suite.setCaptureElements('body')
         .capture('open');
  });
});