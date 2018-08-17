gemini.suite("Slider", () => {
  gemini.suite("basic", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Slider&selectedStory=basic")
      .setCaptureElements(".storybook-component")
      .capture("unfocused without input")
      .capture("focused without input", actions => {
        actions.focus("input");
      });
  });

  gemini.suite("disabled", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Slider&selectedStory=disabled")
      .setCaptureElements(".storybook-component")
      .capture("disabled");
  });
});
