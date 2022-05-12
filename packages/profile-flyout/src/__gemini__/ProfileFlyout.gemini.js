gemini.suite("ProfileFlyout", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=ProfileFlyout&selectedStory=default")
      .setCaptureElements('[data-capture="ProfileFlyout"]')
      .capture("default");
  });

  gemini.suite("with children", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProfileFlyout&selectedStory=open%20with%20children"
      )
      .setCaptureElements('[data-capture="ProfileFlyout"]')
      .capture("with children");
  });
});
