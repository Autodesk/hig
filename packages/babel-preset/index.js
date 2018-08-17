const createTestPreset = require("./test");

module.exports = function createDefaultPreset() {
  const preset = createTestPreset();
  preset.presets[0][1].modules = "umd";
  return preset;
};
