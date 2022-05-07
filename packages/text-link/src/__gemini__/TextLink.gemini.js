gemini.suite("TextLink", () => {
  gemini.suite("Default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=TextLink&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
});
