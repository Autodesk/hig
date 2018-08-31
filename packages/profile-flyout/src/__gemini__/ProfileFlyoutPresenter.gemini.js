gemini.suite("ProfileFlyoutPresenter", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProfileFlyoutPresenter&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default");
  });

  gemini.suite("open", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProfileFlyoutPresenter&selectedStory=open"
      )
      .setCaptureElements(".storybook-component")
      .capture("open");
  });

  gemini.suite("with children", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProfileFlyoutPresenter&selectedStory=with%20children"
      )
      .setCaptureElements(".storybook-component")
      .capture("with children");
  });
});
