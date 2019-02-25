gemini.suite("Tabs", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Tabs&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("default");
});
