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
    description: "Component",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^component./),
    readme: undefined
  },
  {
    description: "Component - Accordion",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^accordion./),
    readme: undefined
  },
  {
    description: "Component - Avatar",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^avatar./),
    readme: undefined
  },
  {
    description: "Component - Banner",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^banner./),
    readme: undefined
  },
  {
    description: "Component - Button",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^button./),
    readme: undefined
  },
  {
    description: "Component - Checkbox",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^checkbox./),
    readme: undefined
  },
  {
    description: "Component - Divider",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^divider./),
    readme: undefined
  },
  {
    description: "Component - Flyout",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^flyout./),
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
    description: "Component - Modal",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^modal./),
    readme: undefined
  },
  {
    description: "Component - Progress bar",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^progressBar./),
    readme: undefined
  },
  {
    description: "Component - Progress ring",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^progressRing./),
    readme: undefined
  },
  {
    description: "Component - Skeleton item",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^skeletonItem./),
    readme: undefined
  },
  {
    description: "Component - Slider",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^slider./),
    readme: undefined
  },
  {
    description: "Component - Table",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^table./),
    readme: undefined
  },
  {
    description: "Component - Tabs",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^tabs./),
    readme: undefined
  },
  {
    description: "Component - Text area",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^textArea./),
    readme: undefined
  },
  {
    description: "Component - Text link",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^textLink./),
    readme: undefined
  },
  {
    description: "Component - Tooltip",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^tooltip./),
    readme: undefined
  },
  {
    description: "Component - Typography",
    schema: filterMatchByKey(baseTheme.unresolvedRoles, /^typography./),
    readme: undefined
  }
];
