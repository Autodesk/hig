gemini.suite("Avatar", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=Avatar&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
