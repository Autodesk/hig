gemini.suite("Tooltip", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=Tooltip&selectedStory=default")
      .setCaptureElements('[data-capture="Tooltip"]')
      .capture("Default");
  });
});
