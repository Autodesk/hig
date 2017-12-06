gemini.suite('timestamp', (parent) => {
  parent.setUrl('src/basics/timestamp/tests/gemini-timestamp.html');

  gemini.suite('regular', (suite) => {
    suite.setCaptureElements('.text-timestamp-minutes').capture('timestamps');
  });
});
