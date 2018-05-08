gemini.suite("Typography", suite => {
  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=h1")
    .setCaptureElements(".storybook-component")
    .capture("H1");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=h2")
    .setCaptureElements(".storybook-component")
    .capture("H2");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=h3")
    .setCaptureElements(".storybook-component")
    .capture("H3");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=text")
    .setCaptureElements(".storybook-component")
    .capture("Text");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=sub1")
    .setCaptureElements(".storybook-component")
    .capture("Sub1");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=sub2")
    .setCaptureElements(".storybook-component")
    .capture("Sub2");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=body")
    .setCaptureElements(".storybook-component")
    .capture("Body");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=bold")
    .setCaptureElements(".storybook-component")
    .capture("Bold");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=disabled")
    .setCaptureElements(".storybook-component")
    .capture("Disabled");

  suite
    .setUrl("iframe.html?selectedKind=Typography&selectedStory=caption")
    .setCaptureElements(".storybook-component")
    .capture("Caption");
});
