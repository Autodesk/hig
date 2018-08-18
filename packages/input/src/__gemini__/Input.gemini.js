const themes = [
  {
    name: "Light gray medium density",
    url:
      "iframe.html?selectedKind=Input&selectedStory=Light%20gray%2C%20medium%20density"
  },
  {
    name: "Light gray high density",
    url:
      "iframe.html?selectedKind=Input&selectedStory=Light%20gray%2C%20high%20density"
  },
  {
    name: "Dark blue medium density",
    url:
      "iframe.html?selectedKind=Input&selectedStory=Dark%20blue%2C%20medium%20density"
  },
  {
    name: "Dark blue high density",
    url:
      "iframe.html?selectedKind=Input&selectedStory=Dark%20blue%2C%20high%20density"
  },
  {
    name: "Web light",
    url: "iframe.html?selectedKind=Input&selectedStory=Web%20light"
  }
];

gemini.suite("Input", () => {
  themes.forEach(({ name, url }) => {
    gemini.suite(name, child => {
      child
        .setUrl(url)
        .setCaptureElements(".storybook-component")
        .capture(name);
    });
  });
});
