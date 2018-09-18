gemini.suite("ProfileFlyoutPresenter", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProfileFlyoutPresenter&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default");
  });

  gemini.suite("with children", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProfileFlyoutPresenter&selectedStory=open%20with%20children"
      )
      .setCaptureElements(".storybook-component")
      .capture("with children");
  });
});
