gemini.suite('side-nav-full', (parent) => {
  parent.setUrl(
    'src/components/global-nav/side-nav/side-nav-full/tests/gemini-side-nav-full.html'
  );

  gemini.suite('side-nav-full', (suite) => {
    suite
      .setCaptureElements('body')
      .capture('light theme')
      .capture('dark blue theme', (actions, find) => {
        actions.click(find('body'));
      });
  });
});
