gemini.suite("IconButton", () => {
  gemini.suite("Default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=IconButton&selectedStory=default")
      .setCaptureElements(".hig__icon-button")
      .capture("Default");
  });

  gemini.suite("with link", suite => {
    suite
      .setUrl("iframe.html?selectedKind=IconButton&selectedStory=with%20link")
      .setCaptureElements(".hig__icon-button")
      .capture("with link");
  });
});
