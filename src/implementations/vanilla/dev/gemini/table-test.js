gemini.suite("table", parent => {
  parent.setUrl(
    "src/components/table/tests/gemini-table.html"
  );

  gemini.suite("table", suite => {
    suite.setCaptureElements("body").capture("table");
  });
});
