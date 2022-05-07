gemini.suite("NumericInput", () => {
  gemini.suite("All Variations", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=NumericInput&selectedStory=all%20variations"
      )
      .setCaptureElements(".storybook-component")
      .capture("All Variations");
  });
});
