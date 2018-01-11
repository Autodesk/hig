gemini.suite('side-nav-compact', (parent) => {
  parent.setUrl(
    'src/components/global-nav/side-nav/side-nav-compact/tests/gemini-side-nav-compact.html'
  );

  gemini.suite('side-nav-compact', (suite) => {
    suite
      .setCaptureElements('body')
      .capture('light theme', (actions) => {
        actions.setWindowSize(768, 768);
      })
      .capture('dark blue theme', (actions, find) => {
        actions.setWindowSize(768, 768);
        actions.click(find('body'));
      });
  });
});
