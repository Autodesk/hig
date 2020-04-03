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
  "tabs.sharedProperties.focus.haloWidth": {
    type: LENGTH,
    value: { ref: "basics.borderWidths.medium" }
  },
  "tabs.sharedProperties.focus.haloColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.autodeskBlue.500" },
    transform: { alpha: 0.5 }
  },
  "tabs.label.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" }
  },
  "tabs.label.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" }
  },
  "tabs.label.fontSize": {
    type: FONT_SIZE,
    value: { ref: "typography.body.fontSize" }
  },
  "tabs.label.inactive.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "tabs.label.active.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" }
  },
  "tabs.label.active.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "typography.body.lineHeight" }
  },
  "tabs.iconSize": {
    type: LENGTH,
    value: { ref: "density.spacings.large" }
  },
  "tabs.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.icon.default" }
  },
  "tabs.icon.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.closeButton.minSize": {
    type: LENGTH,
    value: { ref: "basics.spacings.lowSmall" }
  },
  "tabs.closeButton.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.closeButton.default.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.icon.default" }
  },
  "tabs.closeButton.hover.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" }
  },
  "tabs.closeButton.pressed.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" }
  },
  /**
   * ## Variants
   *
   * ### Underline
   *
   */
  "tabs.underline.wrapper.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.reference.base" },
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
  "tabs.underline.hover.haloColor": {
    type: COLOR,
    value: { ref: "colorScheme.reference.base" },
    transform: { alpha: 0.85 }
  },
  "tabs.underline.active.haloColor": {
    type: COLOR,
    value: { ref: "colorScheme.reference.accent" }
  },
  /**
   * ## Variants
   *
   * ### Box
   *
   */
  "tabs.box.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.opacity.transparent" }
  },
  "tabs.box.tab.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.box.tab.paddingVertical": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "tabs.box.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" }
  },
  "tabs.box.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" },
    transform: { alpha: 0.5 }
  },
  "tabs.box.divider.borderColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" }
  },
  "tabs.box.dividerWidth": {
    type: LENGTH,
    value: { ref: "divider.borderWidth" }
  },
  "tabs.box.dividerHeight": {
    type: LENGTH,
    value: "18px"
  },
  /**
   * ## Variants
   *
   * ### Canvas
   *
   */
  "tabs.canvas.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.opacity.transparent" }
  },
  "tabs.canvas.tab.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" }
  },
  "tabs.canvas.tab.paddingVertical": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "tabs.canvas.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level200" },
    transform: { alpha: 0.5 }
  },
  "tabs.canvas.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level200" }
  },
  "tabs.canvas.divider.borderColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" }
  },
  "tabs.canvas.dividerWidth": {
    type: LENGTH,
    value: { ref: "divider.borderWidth" }
  },
  "tabs.canvas.dividerHeight": {
    type: LENGTH,
    value: "18px"
  },
  /**
   * ## Deprecated
   *
   *
   */
  "tabs.general.tab.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "tabs.label.fontFamily" },
    metadata: { deprecated: { equivalent: "tabs.label.fontFamily" } }
  },
  "tabs.general.tab.fontSize": {
    type: FONT_SIZE,
    value: { ref: "tabs.label.fontSize" },
    metadata: { deprecated: { equivalent: "tabs.label.fontSize" } }
  },
  "tabs.general.tab.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "tabs.label.inactive.fontWeight" },
    metadata: { deprecated: { equivalent: "tabs.label.inactive.fontWeight" } }
  },
  "tabs.general.tab.active.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "tabs.label.active.fontWeight" },
    metadata: { deprecated: { equivalent: "tabs.label.active.fontWeight" } }
  },
  "tabs.general.tab.color": {
    type: COLOR,
    value: { ref: "tabs.label.fontColor" },
    metadata: { deprecated: { equivalent: "tabs.label.fontColor" } }
  },
  "tabs.general.tab.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "tabs.label.active.lineHeight" },
    metadata: { deprecated: { equivalent: "tabs.label.active.lineHeight" } }
  },
  "tabs.general.halo.size": {
    type: LENGTH,
    value: { ref: "tabs.sharedProperties.focus.haloWidth" },
    metadata: {
      deprecated: { equivalent: "tabs.sharedProperties.focus.haloWidth" }
    }
  },
  "tabs.general.halo.color": {
    type: COLOR,
    value: { ref: "tabs.sharedProperties.focus.haloColor" },
    metadata: {
      deprecated: { equivalent: "tabs.sharedProperties.focus.haloColor" }
    }
  },
  "tabs.general.icon.size": {
    type: LENGTH,
    value: { ref: "tabs.iconSize" },
    metadata: { deprecated: { equivalent: "tabs.iconSize" } }
  },
  "tabs.general.icon.color": {
    type: COLOR,
    value: { ref: "tabs.iconColor" },
    metadata: { deprecated: { equivalent: "tabs.iconColor" } }
  },
  "tabs.general.icon.gutter": {
    type: LENGTH,
    value: { ref: "tabs.icon.gutter" },
    metadata: { deprecated: { equivalent: "tabs.icon.gutter" } }
  },
  "tabs.general.closeButton.size": {
    type: LENGTH,
    value: { ref: "tabs.closeButton.minSize" },
    metadata: { deprecated: { equivalent: "tabs.closeButton.minSize" } }
  },
  "tabs.general.closeButton.gutter": {
    type: LENGTH,
    value: { ref: "tabs.closeButton.gutter" },
    metadata: { deprecated: { equivalent: "tabs.closeButton.gutter" } }
  },
  "tabs.general.closeButton.color": {
    type: COLOR,
    value: { ref: "tabs.closeButton.default.iconColor" },
    metadata: {
      deprecated: { equivalent: "tabs.closeButton.default.iconColor" }
    }
  },
  "tabs.general.closeButton.hover.color": {
    type: COLOR,
    value: { ref: "tabs.closeButton.hover.iconColor" },
    metadata: { deprecated: { equivalent: "tabs.closeButton.hover.iconColor" } }
  },
  "tabs.general.closeButton.pressed.color": {
    type: COLOR,
    value: { ref: "tabs.closeButton.pressed.iconColor" },
    metadata: {
      deprecated: { equivalent: "tabs.closeButton.pressed.iconColor" }
    }
  },
  "tabs.underline.halo.hover.color": {
    type: COLOR,
    value: { ref: "tabs.underline.hover.haloColor" },
    metadata: { deprecated: { equivalent: "tabs.underline.hover.haloColor" } }
  },
  "tabs.underline.halo.active.color": {
    type: COLOR,
    value: { ref: "tabs.underline.active.haloColor" },
    metadata: { deprecated: { equivalent: "tabs.underline.active.haloColor" } }
  },
  "tabs.box.tab.horizontalPadding": {
    type: LENGTH,
    value: { ref: "tabs.box.tab.paddingHorizontal" },
    metadata: { deprecated: { equivalent: "tabs.box.tab.paddingHorizontal" } }
  },
  "tabs.box.tab.verticalPadding": {
    type: LENGTH,
    value: { ref: "tabs.box.tab.paddingVertical" },
    metadata: { deprecated: { equivalent: "tabs.box.tab.paddingVertical" } }
  },
  "tabs.box.divider.color": {
    type: COLOR,
    value: { ref: "tabs.box.divider.borderColor" },
    metadata: { deprecated: { equivalent: "tabs.box.divider.borderColor" } }
  },
  "tabs.box.divider.width": {
    type: LENGTH,
    value: { ref: "tabs.box.dividerWidth" },
    metadata: { deprecated: { equivalent: "tabs.box.dividerWidth" } }
  },
  "tabs.box.divider.height": {
    type: LENGTH,
    value: { ref: "tabs.box.dividerHeight" },
    metadata: { deprecated: { equivalent: "tabs.box.dividerHeight" } }
  },
  "tabs.canvas.tab.horizontalPadding": {
    type: LENGTH,
    value: { ref: "tabs.canvas.tab.paddingHorizontal" },
    metadata: {
      deprecated: { equivalent: "tabs.canvas.tab.paddingHorizontal" }
    }
  },
  "tabs.canvas.tab.verticalPadding": {
    type: LENGTH,
    value: { ref: "tabs.canvas.tab.paddingVertical" },
    metadata: { deprecated: { equivalent: "tabs.canvas.tab.paddingVertical" } }
  },
  "tabs.canvas.divider.color": {
    type: COLOR,
    value: { ref: "tabs.canvas.divider.borderColor" },
    metadata: { deprecated: { equivalent: "tabs.canvas.divider.borderColor" } }
  },
  "tabs.canvas.divider.width": {
    type: LENGTH,
    value: { ref: "tabs.canvas.dividerWidth" },
    metadata: { deprecated: { equivalent: "tabs.canvas.dividerWidth" } }
  },
  "tabs.canvas.divider.height": {
    type: LENGTH,
    value: { ref: "tabs.canvas.dividerHeight" },
    metadata: { deprecated: { equivalent: "tabs.canvas.dividerHeight" } }
  }
};
