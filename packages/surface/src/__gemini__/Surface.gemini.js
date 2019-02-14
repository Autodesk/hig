gemini.suite("Surface", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Surface&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
  gemini.suite("customized", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Surface&selectedStory=customized")
      .setCaptureElements(".storybook-component")
      .capture("customized");
  });
});
