gemini.suite("RichText", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=RichText&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
});
