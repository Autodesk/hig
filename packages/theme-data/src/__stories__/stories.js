import { config as baseThemeConfig } from "../themes/baseTheme";
import basicsReadme from "../basics/README.md";
import densityReadme from "./DENSITY_README.md";
import colorSchemeReadme from "./COLOR_SCHEME_README.md";

function filterMatchByKey(o, keyFragment) {
  return Object.keys(o).reduce((acc, key) => {
    if (key.match(keyFragment)) {
      return { ...acc, [key]: o[key] };
    }
    return acc;
  }, {});
}

export default [
  {
    description: "Basics - Border radii",
    schema: filterMatchByKey(baseThemeConfig, "basics.borderRadii"),
    readme: basicsReadme
  },
  {
    description: "Basics - Border widths",
    schema: filterMatchByKey(baseThemeConfig, "basics.borderWidths"),
    readme: basicsReadme
  },
  {
    description: "Basics - Colors",
    schema: filterMatchByKey(baseThemeConfig, "basics.colors"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font families",
    schema: filterMatchByKey(baseThemeConfig, "basics.fontFamilies"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font sizes",
    schema: filterMatchByKey(baseThemeConfig, "basics.fontSizes"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font weights",
    schema: filterMatchByKey(baseThemeConfig, "basics.fontWeights"),
    readme: basicsReadme
  },
  {
    description: "Basics - Line heights",
    schema: filterMatchByKey(baseThemeConfig, "basics.lineHeights"),
    readme: basicsReadme
  },
  {
    description: "Basics - Shadows",
    schema: filterMatchByKey(baseThemeConfig, "basics.shadows"),
    readme: basicsReadme
  },
  {
    description: "Basics - Spacings",
    schema: filterMatchByKey(baseThemeConfig, "basics.spacings"),
    readme: basicsReadme
  },
  {
    description: "Color scheme",
    schema: filterMatchByKey(baseThemeConfig, "colorScheme"),
    readme: colorSchemeReadme
  },
  {
    description: "Density",
    schema: filterMatchByKey(baseThemeConfig, "density"),
    readme: densityReadme
  },
  {
    description: "Component - Checkbox",
    schema: filterMatchByKey(baseThemeConfig, /^CHECKBOX./),
    readme: undefined
  },
  {
    description: "Component - Forms",
    schema: filterMatchByKey(baseThemeConfig, /^FORM_FIELD./),
    readme: undefined
  },
  {
    description: "Component - Input",
    schema: filterMatchByKey(baseThemeConfig, /^INPUT./),
    readme: undefined
  },
  {
    description: "Component - Label",
    schema: filterMatchByKey(baseThemeConfig, /^LABEL./),
    readme: undefined
  },
  {
    description: "Component - Menu",
    schema: filterMatchByKey(baseThemeConfig, /^MENU./),
    readme: undefined
  },
  {
    description: "Component - Text area",
    schema: filterMatchByKey(baseThemeConfig, /^TEXT_AREA./),
    readme: undefined
  }
];
