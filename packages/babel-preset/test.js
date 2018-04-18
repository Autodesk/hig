module.exports = function createTestPreset() {
  return {
    presets: [["env", { modules: "umd" }], "react", "stage-2"],
    plugins: ["transform-object-rest-spread", "react-docgen"]
  };
};
