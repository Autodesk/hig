gemini.suite("ProgressRing", () => {
  gemini.suite("determinate default", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProgressRing&selectedStory=determinate%20default"
      )
      .setCaptureElements(".storybook-component")
      .capture("default");
  });
  gemini.suite("determinate extra small", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProgressRing&selectedStory=determinate%20extra%20small"
      )
      .setCaptureElements(".storybook-component")
      .capture("extra small");
  });
  gemini.suite("determinate small", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProgressRing&selectedStory=determinate%20small"
      )
      .setCaptureElements(".storybook-component")
      .capture("small");
  });
  gemini.suite("determinate medium", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProgressRing&selectedStory=determinate%20medium"
      )
      .setCaptureElements(".storybook-component")
      .capture("medium");
  });
  gemini.suite("determinate large", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProgressRing&selectedStory=determinate%20large"
      )
      .setCaptureElements(".storybook-component")
      .capture("large");
  });
  gemini.suite("determinate extra large", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProgressRing&selectedStory=determinate%20extra%20large"
      )
      .setCaptureElements(".storybook-component")
      .capture("extra-large");
  });
});
