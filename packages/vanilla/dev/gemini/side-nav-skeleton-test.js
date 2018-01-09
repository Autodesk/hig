gemini.suite('side-nav-skeleton', (parent) => {
  parent.setUrl(
    'src/components/global-nav/side-nav/side-nav-skeleton/tests/gemini-side-nav-skeleton.html'
  );

  gemini.suite('side-nav-skeleton', (suite) => {
    suite
      .setCaptureElements('body')
      .capture('light theme')
      .capture('dark blue theme', (actions, find) => {
        actions.click(find('body'));
      });
  });
});
