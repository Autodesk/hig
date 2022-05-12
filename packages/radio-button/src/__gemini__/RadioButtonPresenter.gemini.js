gemini.suite("RadioButtonPresenter", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=RadioButtonPresenter&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default - unfocused");
  });

  gemini.suite("checked", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=RadioButtonPresenter&selectedStory=checked"
      )
      .setCaptureElements(".storybook-component")
      .capture("checked - unfocused")
      .capture("checked - focused", (actions) => {
        actions.focus("input");
      });
  });

  gemini.suite("disabled", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=RadioButtonPresenter&selectedStory=disabled"
      )
      .setCaptureElements(".storybook-component")
      .capture("disabled - unfocused");
  });
});
