gemini.suite("Notifications", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Notifications&selectedStory=V1")
    .setCaptureElements(".hig__flyout__panel")
    .capture("Default");
});
