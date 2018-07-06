gemini.suite("Dropdown", () => {
  gemini.suite("basic", suite => {
    suite
      .setUrl("iframe.html?selectedKind=Dropdown&selectedStory=basic")
      .setCaptureElements("body")
      .capture("1 unfocused")
      // Small differences in placeholder text can easily generate false negatives
      .capture("2 focused", { tolerance: 5 }, actions => {
        actions.focus("input");
      })
      .capture("3 navigating menu", actions => {
        actions.sendKeys(gemini.ARROW_DOWN);
        actions.sendKeys(gemini.ARROW_DOWN);
      })
      .capture("4 confirming selection", actions => {
        actions.sendKeys(gemini.ENTER);
      })
      .capture("5 reopening menu", actions => {
        actions.focus("body");
        actions.focus("input");
      });
  });
});
