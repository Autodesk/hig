gemini.suite("Typography", () => {
  gemini.suite("All Variations", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=Typography&selectedStory=all%20variations"
      )
      .setCaptureElements(".storybook-component")
      .capture("All Variations");
  });
});
