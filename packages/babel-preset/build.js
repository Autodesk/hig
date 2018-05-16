module.exports = function createBuildPreset() {
  return {
    exclude: [
      "**/node_modules/**",
      "**/*.css",
      "**/*.scss",
      "**/*.html",
      "**/*.svg",
      "**/*.json"
    ],
    presets: [
      [
        "env",
        {
          modules: false,
          targets: {
            browser: ">1%"
          }
        }
      ],
      "stage-2",
      "react"
    ],
    plugins: ["external-helpers", "react-docgen"]
  };
};
