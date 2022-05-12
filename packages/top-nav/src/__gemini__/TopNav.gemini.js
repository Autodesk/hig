gemini.suite("TopNav", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=TopNav&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
