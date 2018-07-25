gemini.suite("TextAreaPresenter", () => {
  gemini.suite("default", suite => {
    suite
      .setUrl("iframe.html?selectedKind=TextArea&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("unfocused without input")
      // Small differences in placeholder text can easily generate false negatives
      .capture("focused without input", { tolerance: 5 }, actions => {
        actions.focus("textarea");
      })
      .capture("focused with input", (actions, find) => {
        actions.sendKeys(find("textarea"), "Foobar");
      })
      .capture("unfocused with input", actions => {
        actions.focus("body");
      });
  });
});
