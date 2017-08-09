gemini.suite('icon-button', (parent) => {
  parent.setUrl('src/web/basics/icon-button/tests/gemini-icon-button.html');

  gemini.suite('regular', (suite) => {
       suite.setCaptureElements('.icon-button')
            .capture('regular icon button');
  });

  gemini.suite('disabled icon button', (suite) => {
       suite.setCaptureElements('.disabled-icon-button')
            .capture('disabled icon button');
  });
});