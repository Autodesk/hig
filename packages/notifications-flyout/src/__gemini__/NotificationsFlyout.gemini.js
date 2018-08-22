gemini.suite("NotificationsFlyout", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=NotificationsFlyout&selectedStory=default"
      )
      .setCaptureElements('[data-capture="NotificationsFlyout"]')
      .capture("Default");
  });

  gemini.suite("empty", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=NotificationsFlyout&selectedStory=empty"
      )
      .setCaptureElements('[data-capture="NotificationsFlyout"]')
      .capture("Empty");
  });
});
