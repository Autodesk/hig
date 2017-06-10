gemini.suite('help', (parent) => {
  parent.setUrl('src/web/components/global-nav/top-nav/help/tests/gemini-help.html');

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('body')
         .capture('regular button');
  });

  gemini.suite('link', (suite) => {
    suite.setCaptureElements('body')
         .capture('link button');
  });
});