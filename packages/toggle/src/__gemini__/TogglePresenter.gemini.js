gemini.suite("Toggle", () => {
  gemini.suite("All Variations", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=Toggle&selectedStory=all%20variations"
      )
      .setCaptureElements(".storybook-component")
      .capture("All Variations");
  });
});

