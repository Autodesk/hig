gemini.suite("ProjectAccountSwitcherPresenter", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl(
        "iframe.html?&selectedKind=GlobalNav%7CProjectAccountSwitcher&selectedStory=default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default - unfocused");
    ///.capture("default - clicked", actions => {
    //  actions.click(".project-account-switcher__target");
    // });
  });
});
