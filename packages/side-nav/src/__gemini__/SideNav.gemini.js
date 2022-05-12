gemini.suite("SideNav", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=SideNav&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("default");
});
