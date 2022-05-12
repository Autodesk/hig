gemini.suite("CheckboxPresenter", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=CheckboxPresenter&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default - unfocused");
  });

  gemini.suite("checked", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=CheckboxPresenter&selectedStory=checked"
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
        "iframe.html?selectedKind=CheckboxPresenter&selectedStory=disabled"
      )
      .setCaptureElements(".storybook-component")
      .capture("disabled - unfocused");
  });

  gemini.suite("indeterminate", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=CheckboxPresenter&selectedStory=indeterminate"
      )
      .setCaptureElements(".storybook-component")
      .capture("indeterminate - unfocused");
  });
});
