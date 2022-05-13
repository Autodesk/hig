gemini.suite("Timestamp", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=Timestamp&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
