gemini.suite("ModalPresenter", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=ModalPresenter&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default");
  });

  gemini.suite("open", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=ModalPresenter&selectedStory=open")
      .setCaptureElements(".storybook-component")
      .capture("open");
  });
});
