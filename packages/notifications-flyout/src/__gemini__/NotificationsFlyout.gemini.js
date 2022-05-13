const captureOptions = {
  // Small differences in placeholder text can easily generate false negatives
  tolerance: 5,
};

gemini.suite("NotificationsFlyout", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=NotificationsFlyout&selectedStory=default"
      )
      .setCaptureElements('[data-capture="NotificationsFlyout"]')
      .capture("Default", captureOptions, () => {});
  });

  gemini.suite("empty", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=NotificationsFlyout&selectedStory=empty"
      )
      .setCaptureElements('[data-capture="NotificationsFlyout"]')
      .capture("Empty", captureOptions, () => {});
  });
});
