gemini.suite('text link', (parent) => {
  parent.setUrl('src/basics/text-link/tests/gemini-text-link.html');

  gemini.suite('defaults', (suite) => {
       suite.setCaptureElements('.tests-text-link-defaults')
            .capture('plain');
  });

  gemini.suite('with text and href', (suite) => {
       suite.setCaptureElements('.tests-text-link-with-href')
            .capture('plain');
  });

  gemini.suite('secondary', (suite) => {
       suite.setCaptureElements('.tests-text-link-secondary')
            .capture('plain');
  });

  gemini.suite('secondary with href', (suite) => {
       suite.setCaptureElements('.tests-text-link-secondary-with-href')
            .capture('plain');
  });

  gemini.suite('with onclick', (suite) => {
       suite.setCaptureElements('.tests-text-link-with-onclick')
            .capture('plain');

       suite.setCaptureElements('.tests-text-link-with-onclick')
            .capture('clicked', actions => {
                actions.click(`.tests-text-link-with-onclick .hig__text-link`);
            });
  });

  gemini.suite('with onclick and href', (suite) => {
       suite.setCaptureElements('.tests-text-link-with-onclick-and-href')
            .capture('plain');
  });

});
