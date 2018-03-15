gemini.suite("toast", parent => {
  parent.setUrl("iframe.html?selectedKind=Toast&selectedStory=default");

  gemini.suite("default", suite => {
    suite.setCaptureElements("body").capture("body");
  });
});
