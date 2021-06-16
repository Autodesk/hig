gemini.suite("AvatarBundle", suite => {
  suite
    .setUrl("iframe.html?selectedKind=AvatarBundle&selectedStory=default")
    .setCaptureElements(".storybook-component")
    .capture("Default");
});
