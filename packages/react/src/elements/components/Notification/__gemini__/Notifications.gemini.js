gemini.suite("Notifications", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Notifications&selectedStory=V1")
    .setCaptureElements(".hig__flyout__panel")
    // Small differences in placeholder text can easily generate false negatives
    .capture("Default", { tolerance: 5 }, () => {});
});
