gemini.suite("IconButton", () => {
  gemini.suite("Default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=IconButton&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });

  gemini.suite("with link", suite => {
    suite
      .setUrl("iframe.html?selectedKind=IconButton&selectedStory=with%20link")
      .setCaptureElements(".storybook-component")
      .capture("with link");
  });
});
