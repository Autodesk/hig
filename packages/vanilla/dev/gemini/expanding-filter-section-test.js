gemini.suite('expanding-filter-section', (parent) => {
  parent.setUrl(
    'src/components/expanding-filter-section/tests/gemini-expanding-filter-section.html',
  );

  gemini.suite('medium closed', (suite) => {
    suite.setCaptureElements('.m-closed').capture('medium closed');
  });

  gemini.suite('medium open', (suite) => {
    suite.setCaptureElements('.m-open').capture('medium open');
  });

  gemini.suite('small closed', (suite) => {
    suite.setCaptureElements('.m-closed').capture('small closed');
  });

  gemini.suite('small open', (suite) => {
    suite.setCaptureElements('.m-open').capture('small open');
  });
});
