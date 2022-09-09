import baseTheme from "../baseTheme";

function filterMatchByKey(o, keyFragment) {
  return Object.keys(o).reduce((acc, key) => {
    if (key.match(keyFragment)) {
      return { ...acc, [key]: o[key] };
    }
    return acc;
  }, {});
}

export default {
  system: {
    colorScheme: filterMatchByKey(baseTheme.unresolvedRoles, "colorScheme"),
    density: filterMatchByKey(baseTheme.unresolvedRoles, "density"),
  },
  basics: {
    borderRadii: filterMatchByKey(
      baseTheme.unresolvedRoles,
      "basics.borderRadii"
    ),
    borderWidths: filterMatchByKey(
      baseTheme.unresolvedRoles,
      "basics.borderWidths"
    ),
    colors: filterMatchByKey(baseTheme.unresolvedRoles, "basics.colors"),
    fontFamilies: filterMatchByKey(
      baseTheme.unresolvedRoles,
      "basics.fontFamilies"
    ),
    fontSizes: filterMatchByKey(baseTheme.unresolvedRoles, "basics.fontSizes"),
    fontWeights: filterMatchByKey(
      baseTheme.unresolvedRoles,
      "basics.fontWeights"
    ),
    lineHeights: filterMatchByKey(
      baseTheme.unresolvedRoles,
      "basics.lineHeights"
    ),
    shadows: filterMatchByKey(baseTheme.unresolvedRoles, "basics.shadows"),
    spacings: filterMatchByKey(baseTheme.unresolvedRoles, "basics.spacings"),
  },
  components: {
    accordion: filterMatchByKey(baseTheme.unresolvedRoles, /^accordion./),
    avatar: filterMatchByKey(baseTheme.unresolvedRoles, /^avatar./),
    avatarBundle: filterMatchByKey(baseTheme.unresolvedRoles, /^avatarBundle./),
    badge: filterMatchByKey(baseTheme.unresolvedRoles, /^badge./),
    banner: filterMatchByKey(baseTheme.unresolvedRoles, /^banner./),
    breadcrumb: filterMatchByKey(baseTheme.unresolvedRoles, /^breadcrumb./),
    button: filterMatchByKey(baseTheme.unresolvedRoles, /^button./),
    canvasFrame: filterMatchByKey(baseTheme.unresolvedRoles, /^canvasFrame./),
    checkbox: filterMatchByKey(baseTheme.unresolvedRoles, /^checkbox./),
    dataVis: filterMatchByKey(baseTheme.unresolvedRoles, /^dataVis./),
    datePicker: filterMatchByKey(baseTheme.unresolvedRoles, /^datePicker./),
    divider: filterMatchByKey(baseTheme.unresolvedRoles, /^divider./),
    emptyState: filterMatchByKey(baseTheme.unresolvedRoles, /^emptyState./),
    flyout: filterMatchByKey(baseTheme.unresolvedRoles, /^flyout./),
    iconButton: filterMatchByKey(baseTheme.unresolvedRoles, /^iconButton./),
    illustration: filterMatchByKey(baseTheme.unresolvedRoles, /^illustration./),
    input: filterMatchByKey(baseTheme.unresolvedRoles, /^input./),
    label: filterMatchByKey(baseTheme.unresolvedRoles, /^label./),
    menu: filterMatchByKey(baseTheme.unresolvedRoles, /^menu./),
    modal: filterMatchByKey(baseTheme.unresolvedRoles, /^modal./),
    notifications: filterMatchByKey(
      baseTheme.unresolvedRoles,
      /^notifications./
    ),
    panel: filterMatchByKey(baseTheme.unresolvedRoles, /^panel./),
    progressBar: filterMatchByKey(baseTheme.unresolvedRoles, /^progress.bar./),
    progressRing: filterMatchByKey(
      baseTheme.unresolvedRoles,
      /^progress.ring./
    ),
    scrollbar: filterMatchByKey(baseTheme.unresolvedRoles, /^scrollbar./),
    sideNav: filterMatchByKey(baseTheme.unresolvedRoles, /^sideNav./),
    skeletonItem: filterMatchByKey(baseTheme.unresolvedRoles, /^skeletonItem./),
    stepIndicator: filterMatchByKey(
      baseTheme.unresolvedRoles,
      /^stepIndicator./
    ),
    slider: filterMatchByKey(baseTheme.unresolvedRoles, /^slider./),
    table: filterMatchByKey(baseTheme.unresolvedRoles, /^table./),
    tabs: filterMatchByKey(baseTheme.unresolvedRoles, /^tabs./),
    tag: filterMatchByKey(baseTheme.unresolvedRoles, /^tag./),
    textArea: filterMatchByKey(baseTheme.unresolvedRoles, /^textArea./),
    textLink: filterMatchByKey(baseTheme.unresolvedRoles, /^textLink./),
    thumbnail: filterMatchByKey(baseTheme.unresolvedRoles, /^thumbnail./),
    tile: filterMatchByKey(baseTheme.unresolvedRoles, /^tile./),
    timestamp: filterMatchByKey(baseTheme.unresolvedRoles, /^timestamp./),
    toggle: filterMatchByKey(baseTheme.unresolvedRoles, /^toggle./),
    token: filterMatchByKey(baseTheme.unresolvedRoles, /^token./),
    tooltip: filterMatchByKey(baseTheme.unresolvedRoles, /^tooltip./),
    topNav: filterMatchByKey(baseTheme.unresolvedRoles, /^topNav./),
    treeView: filterMatchByKey(baseTheme.unresolvedRoles, /^treeView./),
    typography: filterMatchByKey(baseTheme.unresolvedRoles, /^typography./),
  },
};
