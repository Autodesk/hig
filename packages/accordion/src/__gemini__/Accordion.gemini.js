gemini.suite("Accordion", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Accordion&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
  gemini.suite("indicatorInRight", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=Accordion&selectedStory=indicatorInRight"
      )
      .setCaptureElements(".storybook-component")
      .capture("indicatorInRight");
  });
});
