gemini.suite("Dropdown", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl("iframe.html?selectedKind=Dropdown&selectedStory=default")
      .setCaptureElements(".storybook-component")
      .capture("default - unfocused")
      .capture("default - focused", (actions) => {
        actions.focus("input");
      })
      .capture("default - clicked", (actions) => {
        actions.click("input");
      });
  });
});
