module.exports = function createBuildPreset() {
  return {
    exclude: [
      "**/node_modules/**"
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
    plugins: ["react-docgen"]
  };
};
