gemini.suite('button', (parent) => {
  parent.setUrl('src/web/basics/button/tests/gemini-button.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.primary')
            .capture('regular button');
  });

  gemini.suite('secondary', (suite) => {
       suite.setCaptureElements('.secondary')
            .capture('secondary button');
  });

  gemini.suite('flat', (suite) => {
       suite.setCaptureElements('.flat')
            .capture('flat button');
  });
});