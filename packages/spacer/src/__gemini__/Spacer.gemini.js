gemini.suite("Spacer", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Spacer&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });
  gemini.suite("size", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Spacer&selectedStory=size")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });
  gemini.suite("spacing", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Spacer&selectedStory=spacing")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });
  gemini.suite("spacing and size", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=Spacer&selectedStory=spacing%20and%20size"
      )
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });
  gemini.suite("display", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Spacer&selectedStory=display")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });
});
