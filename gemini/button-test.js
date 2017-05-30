gemini.suite('button', (parent) => {
  parent.setUrl('src/web/basics/button/tests/gemini-button.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.regular-button')
            .capture('regular button');
  });

  gemini.suite('link', (suite) => {
       suite.setCaptureElements('.link-button')
            .capture('link button');
  });
});