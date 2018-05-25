gemini.suite("TextField", () => {
  gemini.suite("basic", suite => {
    suite
      .setUrl("iframe.html?selectedKind=TextField&selectedStory=basic")
      .setCaptureElements(".storybook-component")
      .capture("unfocused without input")
      .capture("focused without input", actions => {
        actions.focus("input");
      })
      .capture("focused with input", (actions, find) => {
        actions.sendKeys(find("input"), "Foobar");
      })
      .capture("unfocused with input", actions => {
        actions.focus("body");
      });
  });

  gemini.suite("disabled", suite => {
    suite
      .setUrl("iframe.html?selectedKind=TextField&selectedStory=disabled")
      .setCaptureElements(".storybook-component")
      .capture("disabled");
  });

  gemini.suite("with preceding icon", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=TextField&selectedStory=with%20preceding%20icon"
      )
      .setCaptureElements(".storybook-component")
      .capture("with preceding icon");
  });
});
