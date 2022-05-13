/* eslint-disable max-len */
gemini.suite("ProjectAccountSwitcher", () => {
  gemini.suite("default", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcher&selectedStory=default"
      )
      .setCaptureElements('[data-capture="ProjectAccountSwitcher"]')
      .capture("default");
  });

  gemini.suite("open-accounts-projects", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcher&selectedStory=open-accounts-projects"
      )
      .setCaptureElements('[data-capture="ProjectAccountSwitcher"]')
      .capture("open-accounts-projects");
  });

  gemini.suite("open-accounts", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcher&selectedStory=open-accounts"
      )
      .setCaptureElements('[data-capture="ProjectAccountSwitcher"]')
      .capture("open-accounts");
  });

  gemini.suite("open-projects", (suite) => {
    suite
      .setUrl(
        "iframe.html?selectedKind=ProjectAccountSwitcher&selectedStory=open-projects"
      )
      .setCaptureElements('[data-capture="ProjectAccountSwitcher"]')
      .capture("open-projects");
  });
});
