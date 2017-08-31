gemini.suite('rich text', (suite) => {
  suite
    .setUrl('src/basics/rich-text/tests/gemini-rich-text.html')
    .setCaptureElements('.tests-typo-group')
    .capture('rich-text');
});
