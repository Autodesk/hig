gemini.suite("TextLink", () => {
  gemini.suite("Primary", suite => {
    suite
      .setUrl("iframe.html?selectedKind=TextLink&selectedStory=primary")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });

  gemini.suite("Secondary", suite => {
    suite
      .setUrl("iframe.html?selectedKind=TextLink&selectedStory=secondary")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
});
