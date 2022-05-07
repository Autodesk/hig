gemini.suite("IconButton", () => {
  gemini.suite("Default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=IconButton&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });

  gemini.suite("static", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=IconButton&selectedStory=static")
      .setCaptureElements(".storybook-component")
      .capture("static");
  });
});
