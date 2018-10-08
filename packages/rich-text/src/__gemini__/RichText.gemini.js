gemini.suite("RichText", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=RichText&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });

  gemini.suite("small", suite => {
    suite
      .setUrl("iframe.html?selectedKind=RichText&selectedStory=small")
      .setCaptureElements(".storybook-component")
      .capture("small");
  });

  gemini.suite("large", suite => {
    suite
      .setUrl("iframe.html?selectedKind=RichText&selectedStory=large")
      .setCaptureElements(".storybook-component")
      .capture("large");
  });
});
