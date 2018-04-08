gemini.suite("IconButton", suite => {
  suite
    .setUrl("iframe.html?selectedKind=IconButton&selectedStory=default")
    .setCaptureElements(".hig__icon-button")
    .capture("Default");
});
