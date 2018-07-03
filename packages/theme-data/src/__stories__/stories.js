import schema from "../theme-schema";

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
    schema: filterMatchByKey(schema, "BASICS.BORDER_RADII")
  },
  {
    description: "Basics - Border widths",
    schema: filterMatchByKey(schema, "BASICS.BORDER_WIDTHS")
  },
  {
    description: "Basics - Breakpoints",
    schema: filterMatchByKey(schema, "BASICS.BREAKPOINTS")
  },
  {
    description: "Basics - Colors",
    schema: filterMatchByKey(schema, "BASICS.COLORS")
  },
  {
    description: "Basics - Font families",
    schema: filterMatchByKey(schema, "BASICS.FONT_FAMILIES")
  },
  {
    description: "Basics - Font sizes",
    schema: filterMatchByKey(schema, "BASICS.FONT_SIZES")
  },
  {
    description: "Basics - Font weights",
    schema: filterMatchByKey(schema, "BASICS.FONT_WEIGHTS")
  },
  {
    description: "Basics - Line heights",
    schema: filterMatchByKey(schema, "BASICS.LINE_HEIGHTS")
  },
  {
    description: "Basics - Shadows",
    schema: filterMatchByKey(schema, "BASICS.SHADOWS")
  },
  {
    description: "Basics - Spacings",
    schema: filterMatchByKey(schema, "BASICS.SPACINGS")
  },
  {
    description: "Color scheme",
    schema: filterMatchByKey(schema, "COLOR_SCHEME")
  },
  {
    description: "Density",
    schema: filterMatchByKey(schema, "DENSITY")
  }
];
