gemini.suite("Button", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Button&selectedStory=all%20variations")
    .setCaptureElements(".storybook-component")
    .capture("All Variations");

  suite
    .setUrl(
      "iframe.html?selectedKind=Button&selectedStory=all%20variations%20with%20icons"
    )
    .setCaptureElements(".storybook-component")
    .capture("All Variations with Icons");
});
