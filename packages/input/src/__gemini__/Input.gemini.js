gemini.suite("Input", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Input&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default", { tolerance: 5 }, () => {});
});
