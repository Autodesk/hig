gemini.suite("ProjectAccountSwitcherPresenter", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcherPresenter&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default - unfocused");
  });
  gemini.suite("open with both accounts and projects", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcherPresenter&selectedStory=open%20with%20both%20accounts%20and%20projects"
      )
      .setCaptureElements(".storybook-component")
      .capture("flyout opened");
  });
  gemini.suite("open with accounts", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcherPresenter&selectedStory=open%20with%20accounts"
      )
      .setCaptureElements(".storybook-component")
      .capture("flyout opened");
  });
  gemini.suite("open with projects", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcherPresenter&selectedStory=open%20with%20projects"
      )
      .setCaptureElements(".storybook-component")
      .capture("flyout opened");
  });
});
