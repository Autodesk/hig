gemini.suite("grid", parent => {
  parent.setUrl("src/basics/grid/tests/gemini-grid.html");

  gemini.suite("grid", suite => {
    suite.setCaptureElements(".grid-test").capture("grid");
  });
});
