gemini.suite("Label", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=Label&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
