gemini.suite("Breadcrumbs", () => {
  gemini.suite("defalut2", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Breadcrumbs&selectedStory=breadcrumbs")
      .setCaptureElements(".storybook-component")
      .capture("Default");
  });
});
