import baseTheme from "../baseTheme";
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
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.borderRadii"),
    readme: basicsReadme
  },
  {
    description: "Basics - Border widths",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.borderWidths"),
    readme: basicsReadme
  },
  {
    description: "Basics - Colors",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.colors"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font families",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.fontFamilies"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font sizes",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.fontSizes"),
    readme: basicsReadme
  },
  {
    description: "Basics - Font weights",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.fontWeights"),
    readme: basicsReadme
  },
  {
    description: "Basics - Line heights",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.lineHeights"),
    readme: basicsReadme
  },
  {
    description: "Basics - Shadows",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.shadows"),
    readme: basicsReadme
  },
  {
    description: "Basics - Spacings",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "basics.spacings"),
    readme: basicsReadme
  },
  {
    description: "Color scheme",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "colorScheme"),
    readme: colorSchemeReadme
  },
  {
    description: "Density",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, "density"),
    readme: densityReadme
  },
  {
    description: "Component - Checkbox",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^checkbox./),
    readme: undefined
  },
  {
    description: "Component - Form field",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^formField./),
    readme: undefined
  },
  {
    description: "Component - Input",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^input./),
    readme: undefined
  },
  {
    description: "Component - Label",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^label./),
    readme: undefined
  },
  {
    description: "Component - Menu",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^menu./),
    readme: undefined
  },
  {
    description: "Component - Skeleton item",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^skeletonItem./),
    readme: undefined
  },
  {
    description: "Component - Text area",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^textArea./),
    readme: undefined
  }
];
