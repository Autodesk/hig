gemini.suite("ProgressBar", () => {
  gemini.suite("determinate", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=ProgressBar&selectedStory=determinate")
      .setCaptureElements(".storybook-component")
      .capture("determinate");
  });
});
