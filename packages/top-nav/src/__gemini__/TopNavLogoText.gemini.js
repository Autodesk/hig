gemini.suite("TopNavLogoText", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=TopNavLogoText&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
