const StyleDictionary = require("style-dictionary");
const colorTransformAlpha = require("../src/transforms/color-transform-alpha");
const componentAttributeTransformer = require("../src/transforms/attributes/components-cti");

StyleDictionary.registerTransform(componentAttributeTransformer);
StyleDictionary.registerTransform(colorTransformAlpha);

const colorSchemes = ["light-gray", "dark-blue"];
const densities = ["medium-density", "high-density"];

colorSchemes.forEach(colorScheme => {
  densities.forEach(density => {
    StyleDictionary.extend({
      source: [
        "src/properties/basics/*.json",
        `src/themes/${colorScheme}.json`,
        `src/themes/${density}.json`,
        "src/properties/components/*.json"
      ],
      platforms: {
        // scss: {
        //   transforms: ["attribute/component-cti"],
        //   // transformGroup: "scss",
        //   buildPath: "build/scss/",
        //   files: [
        //     {
        //       destination: `${colorScheme}-${density}-variables.scss`,
        //       format: "scss/variables"
        //     }
        //   ]
        // },
        // js: {
        //   transforms: ["attribute/component-cti"],
        //   transformGroup: "js",
        //   buildPath: "build/js/",
        //   files: [
        //     {
        //       name: "__style_properties",
        //       destination: `${colorScheme}-${density}-properties.js`,
        //       format: "javascript/es6"
        //     }
        //   ]
        // },
        json: {
          transforms: ["attribute/component-cti"],
          transformGroup: "web",
          buildPath: "build/json/",
          files: [
            {
              name: "__style_properties",
              destination: `${colorScheme}-${density}-properties.json`,
              format: "json"
            }
          ]
        }
      }
    }).buildAllPlatforms();
  });
});
