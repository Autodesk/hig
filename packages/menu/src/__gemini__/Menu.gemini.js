gemini.suite("Menu", () => {
  gemini.suite("All Variations", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=Menu&selectedStory=all%20variations")
      .setCaptureElements(".storybook-component")
      .capture("All Variations");
  });
});
