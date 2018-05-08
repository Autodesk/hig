gemini.suite("NotificationsFlyout", suite => {
  suite
    .setUrl("iframe.html?selectedKind=NotificationsFlyout&selectedStory=V1")
    .setCaptureElements(".hig__flyout__panel")
    .capture("Default");
});
