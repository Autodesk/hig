gemini.suite("Tabs", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Tabs&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
  gemini.suite("box", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Tabs&selectedStory=box")
      .setCaptureElements(".storybook-component")
      .capture("box");
  });
  gemini.suite("canvas", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Tabs&selectedStory=canvas")
      .setCaptureElements(".storybook-component")
      .capture("canvas");
  });
  gemini.suite("vertical", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Tabs&selectedStory=vertical")
      .setCaptureElements(".storybook-component")
      .capture("vertical");
  });
});
