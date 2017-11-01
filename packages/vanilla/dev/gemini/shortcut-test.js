gemini.suite('shortcut', (parent) => {
  parent.setUrl('src/components/global-nav/top-nav/shortcut/tests/gemini-shortcut.html');

  gemini.suite('settings', (suite) => {
    suite.setCaptureElements('.hig__global-nav__top-nav')
      .capture('settings shortcut');
  });
});
