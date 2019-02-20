import {
  COLOR,
  BORDER_WIDTH,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING
} from "../../consts/types";

export default {
  // General
  "tabs.general.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },
  "tabs.general.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.medium" }
  },
  "tabs.general.gutter": {
    type: SPACING,
    value: { ref: "density.spacings.extraSmall" }
  },

  // General - Tab
  "tabs.general.tab.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" }
  },
  "tabs.general.tab.fontSize": {
    type: FONT_SIZE,
    value: { ref: "density.fontSizes.medium" }
  },
  "tabs.general.tab.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },

  // General - Tab - Selected
  "tabs.general.tab.selected.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" }
  },
  "tabs.general.tab.selected.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.large" }
  },
  "tabs.general.tab.selected.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" }
  },

  // General - Tab - Disabled
  "tabs.general.tab.disabled.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" },
    transform: { alpha: 0.5 }
  },

  // General - Tab - Hover
  "tabs.general.tab.hover.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.5 }
  },
  "tabs.general.tab.hover.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.medium" }
  },

  // General - Tab - Focus
  "tabs.general.tab.focus.halo.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" },
    transform: { alpha: 0.5 }
  },
  "tabs.general.tab.focus.halo.width": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.large" }
  }
};
