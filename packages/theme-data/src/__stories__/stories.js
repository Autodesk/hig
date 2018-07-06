import schema from "../theme-schema";
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
    schema: filterMatchByKey(schema, "BASICS.BORDER_RADII"),
    readme: basicsReadme
  },
  {
    description: "Basics - Border widths",
    schema: filterMatchByKey(schema, "BASICS.BORDER_WIDTHS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Breakpoints",
    schema: filterMatchByKey(schema, "BASICS.BREAKPOINTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Colors",
    schema: filterMatchByKey(schema, "BASICS.COLORS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font families",
    schema: filterMatchByKey(schema, "BASICS.FONT_FAMILIES"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font sizes",
    schema: filterMatchByKey(schema, "BASICS.FONT_SIZES"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font weights",
    schema: filterMatchByKey(schema, "BASICS.FONT_WEIGHTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Line heights",
    schema: filterMatchByKey(schema, "BASICS.LINE_HEIGHTS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Shadows",
    schema: filterMatchByKey(schema, "BASICS.SHADOWS"),
    readme: basicsReadme
  },
  {
    description: "Basics - Spacings",
    schema: filterMatchByKey(schema, "BASICS.SPACINGS"),
    readme: basicsReadme
  },
  {
    description: "Color scheme",
    schema: filterMatchByKey(schema, "COLOR_SCHEME"),
    readme: colorSchemeReadme
  },
  {
    description: "Density",
    schema: filterMatchByKey(schema, "DENSITY"),
    readme: densityReadme
  },
  {
    description: "Component - Checkbox",
    schema: filterMatchByKey(schema, /^CHECKBOX./),
    readme: undefined
  },
  {
    description: "Component - Input",
    schema: filterMatchByKey(schema, /^INPUT./),
    readme: undefined
  },
  {
    description: "Component - Label",
    schema: filterMatchByKey(schema, /^LABEL./),
    readme: undefined
  },
  {
    description: "Component - Menu",
    schema: filterMatchByKey(schema, /^MENU./),
    readme: undefined
  }
];
