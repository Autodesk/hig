gemini.suite("Slider", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=Slider&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default")
      .capture("pressing the first Slider", (actions) => {
        actions.mouseDown("input[type='range']");
      });
  });

  gemini.suite("disabled", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=Slider&selectedStory=disabled")
      .setCaptureElements(".storybook-component")
      .capture("disabled");
  });
});
