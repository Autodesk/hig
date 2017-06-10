gemini.suite('shortcut', (parent) => {
  parent.setUrl('src/web/components/global-nav/top-nav/shortcut/tests/gemini-shortcut.html');

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('body')
         .capture('gear shortcut');
  });
});