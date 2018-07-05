gemini.suite("Typography", () => {
  gemini.suite("H1", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=h1")
      .setCaptureElements(".storybook-component")
      .capture("H1");
  });

  gemini.suite("H2", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=h2")
      .setCaptureElements(".storybook-component")
      .capture("H2");
  });

  gemini.suite("H3", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=h3")
      .setCaptureElements(".storybook-component")
      .capture("H3");
  });

  gemini.suite("Text", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=text")
      .setCaptureElements(".storybook-component")
      .capture("Text");
  });

  gemini.suite("Sub1", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=sub1")
      .setCaptureElements(".storybook-component")
      .capture("Sub1");
  });

  gemini.suite("Sub2", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=sub2")
      .setCaptureElements(".storybook-component")
      .capture("Sub2");
  });

  gemini.suite("Body", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=body")
      .setCaptureElements(".storybook-component")
      .capture("Body");
  });

  gemini.suite("Bold", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=bold")
      .setCaptureElements(".storybook-component")
      .capture("Bold");
  });

  gemini.suite("Disabled", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=disabled")
      .setCaptureElements(".storybook-component")
      .capture("Disabled");
  });

  gemini.suite("Caption", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Typography&selectedStory=caption")
      .setCaptureElements(".storybook-component")
      .capture("Caption");
  });
});
