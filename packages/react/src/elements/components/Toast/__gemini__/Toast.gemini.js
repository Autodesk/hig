gemini.suite("Toast", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Toast&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
