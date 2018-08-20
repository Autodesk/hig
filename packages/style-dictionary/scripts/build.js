const StyleDictionary = require('style-dictionary');

const colorSchemes = ["light-gray", "dark-blue"];
const densities = ["medium-density", "high-density"];

colorSchemes.forEach(colorScheme => {
  densities.forEach(density => {
    StyleDictionary.extend({
      source: [
        "properties/basics/*.json",
        `themes/${colorScheme}.json`,
        `themes/${density}.json`,
        "properties/components/*.json"
      ],
      platforms: {
        scss: {
          transformGroup: "scss",
          buildPath: "build/scss/",
          files: [{
            destination: `${colorScheme}-${density}-variables.scss`,
            format: "scss/variables"
          }]
        },
        js: {
          transformGroup: "web",
          buildPath: "build/js/",
          files: [{
            name: "__style_properties",
            destination: `${colorScheme}-${density}-properties.js`,
            format: "javascript/object"
          }]
        }
      }
    }).buildAllPlatforms();
  });
});
