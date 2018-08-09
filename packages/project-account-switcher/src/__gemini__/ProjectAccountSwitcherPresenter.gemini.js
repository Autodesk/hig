gemini.suite("ProjectAccountSwitcherPresenter", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcherPresenter&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default - unfocused");
  });
  gemini.suite("open", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcherPresenter&selectedStory=open"
      )
      .setCaptureElements(".storybook-component")
      .capture("flyout opened");
  });
});
