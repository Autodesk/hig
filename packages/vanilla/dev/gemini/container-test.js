gemini.suite('container', (parent) => {
  parent.setUrl('src/basics/container/tests/tests-container.html');

  gemini.suite('container', (suite) => {
    suite.setCaptureElements('body')
      .capture('container');
  });
});
