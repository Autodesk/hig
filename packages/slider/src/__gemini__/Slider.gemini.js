gemini.suite("Slider", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Slider&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default")
      .capture("hovering over first instance", (actions, find) => {
        const rangeInput = find("input[type='range']");
        actions.mouseDown(rangeInput).mouseMove(rangeInput);
      });
  });

  gemini.suite("disabled", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Slider&selectedStory=disabled")
      .setCaptureElements(".storybook-component")
      .capture("disabled");
  });
});
