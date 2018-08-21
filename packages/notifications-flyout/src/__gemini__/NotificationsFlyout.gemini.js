gemini.suite("NotificationsFlyout", suite => {
  suite
    .setUrl(
      "iframe.html?selectedKind=NotificationsFlyout&selectedStory=default"
    )
    .setCaptureElements('[data-capture="NotificationsFlyout"]')
    .capture("Default");
});
