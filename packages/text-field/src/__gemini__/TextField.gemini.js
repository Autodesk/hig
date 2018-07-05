gemini.suite("TextField", () => {
  gemini.suite("basic", suite => {
    suite
      .setUrl("iframe.html?selectedKind=TextField&selectedStory=basic")
      .setCaptureElements(".storybook-component")
      .capture("unfocused without input")
      // Small differences in placeholder text can easily generate false negatives
      .capture("focused without input", { tolerance: 5 }, actions => {
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

  gemini.suite("errors", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=TextField&selectedStory=with%20error%20message"
      )
      .setCaptureElements(".storybook-component")
      .capture("with error message");
  });

  gemini.suite("with errors replacing instructions", suite => {
    suite
      .setUrl(
        "iframe.html?selectedKind=TextField&selectedStory=with%20errors%20replacing%20instructions"
      )
      .setCaptureElements(".storybook-component")
      .capture("with errors replacing instructions");
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
