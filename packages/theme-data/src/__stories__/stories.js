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
    schema: filterMatchByKey(baseThemeConfig, "BASICS.BORDER_RADII"),
    readme: basicsReadme
  },
  {
    description: "Basics - Border widths",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.BORDER_WIDTHS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Colors",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.COLORS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font families",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.FONT_FAMILIES"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font sizes",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.FONT_SIZES"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font weights",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.FONT_WEIGHTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Line heights",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.LINE_HEIGHTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Shadows",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.SHADOWS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Spacings",
    schema: filterMatchByKey(baseThemeConfig, "BASICS.SPACINGS"),
    readme: basicsReadme
  },
  {
    description: "Color scheme",
    schema: filterMatchByKey(baseThemeConfig, "COLOR_SCHEME"),
    readme: colorSchemeReadme
  },
  {
    description: "Density",
    schema: filterMatchByKey(baseThemeConfig, "DENSITY"),
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
