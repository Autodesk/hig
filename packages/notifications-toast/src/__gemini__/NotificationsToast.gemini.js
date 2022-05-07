gemini.suite("NotificationsToast", (suite) => {
  suite
    .setUrl("iframe.html?selectedKind=NotificationsToast&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
