gemini.suite("TextAreaPresenter", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=TextArea&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("unfocused without input")
      .capture("focused with input", (actions, find) => {
        actions.sendKeys(find("textarea"), "Foobar");
      })
      .capture("unfocused with input", (actions) => {
        actions.focus("body");
      });
  });
});
