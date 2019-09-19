import {
  COLOR,
  BORDER_WIDTH,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT
} from "../../consts/types";

export default {
  // General
  "tabs.general.tab.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" }
  },
  "tabs.general.tab.fontSize": {
    type: FONT_SIZE,
    value: { ref: "typography.body.fontSize" }
  },
  "tabs.general.tab.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "tabs.general.tab.active.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" }
  },
  "tabs.general.tab.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  },
  "tabs.general.tab.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "typography.body.lineHeight" }
  },
  "tabs.general.halo.size": {
    type: LENGTH,
    value: { ref: "basics.borderWidths.medium" }
  },
  "tabs.general.halo.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" },
    transform: { alpha: 0.35 }
  },
  "tabs.general.icon.size": {
    type: LENGTH,
    value: { ref: "density.spacings.large" }
  },
  "tabs.general.icon.color": {
    type: COLOR,
    value: { ref: "colorScheme.iconColor" }
  },
  "tabs.general.icon.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.general.closeButton.size": {
    type: LENGTH,
    value: { ref: "basics.spacings.lowSmall" }
  },
  "tabs.general.closeButton.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.general.closeButton.color": {
    type: COLOR,
    value: { ref: "colorScheme.iconColor" }
  },
  "tabs.general.closeButton.hover.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  },
  "tabs.general.closeButton.pressed.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  },

  // Underline
  "tabs.underline.wrapper.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.35 }
  },
  "tabs.underline.wrapper.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.small" }
  },
  "tabs.underline.tab.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.large" }
  },
  "tabs.underline.tab.paddingBottom": {
    type: LENGTH,
    value: { ref: "density.spacings.extraExtraSmall" }
  },
  "tabs.underline.halo.hover.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.85 }
  },
  "tabs.underline.halo.active.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" }
  },

  // Box
  "tabs.box.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel250Color" }
  },
  "tabs.box.tab.horizontalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.box.tab.verticalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "tabs.box.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" }
  },
  "tabs.box.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" },
    transform: { alpha: 0.5 }
  },
  "tabs.box.divider.color": {
    type: COLOR,
    value: { ref: "divider.heavyColor" }
  },
  "tabs.box.divider.width": {
    type: LENGTH,
    value: { ref: "divider.width" }
  },
  "tabs.box.divider.height": {
    type: LENGTH,
    value: "18px"
  },

  // Canvas
  "tabs.canvas.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel350Color" }
  },
  "tabs.canvas.tab.horizontalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" }
  },
  "tabs.canvas.tab.verticalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "tabs.canvas.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel200Color" }
  },
  "tabs.canvas.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel200Color" },
    transform: { alpha: 0.5 }
  },
  "tabs.canvas.divider.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" },
    transform: { alpha: 0.25 }
  },
  "tabs.canvas.divider.width": {
    type: LENGTH,
    value: { ref: "divider.width" }
  },
  "tabs.canvas.divider.height": {
    type: LENGTH,
    value: "18px"
  }
};
