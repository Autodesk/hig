import {
  COLOR,
  BORDER_WIDTH,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
} from "../../consts/types";

export default {
  "tabs.focus.haloWidth": {
    type: LENGTH,
    value: { ref: "basics.borderWidths.medium" },
  },
  "tabs.focus.haloColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.autodeskBlue.500" },
    transform: { alpha: 0.5 },
  },
  "tabs.label.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" },
  },
  "tabs.label.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" },
  },
  "tabs.label.fontSize": {
    type: FONT_SIZE,
    value: { ref: "typography.body.fontSize" },
  },
  "tabs.label.inactive.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" },
  },
  "tabs.label.active.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" },
  },
  "tabs.label.active.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "typography.body.lineHeight" },
  },
  "tabs.iconSize": {
    type: LENGTH,
    value: { ref: "density.spacings.large" },
  },
  "tabs.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.icon.default" },
  },
  "tabs.iconGutter": {
    type: LENGTH,
    value: { ref: "density.spacings.small" },
  },
  "tabs.closeButton.minSize": {
    type: LENGTH,
    value: { ref: "basics.spacings.lowSmall" },
  },
  "tabs.closeButton.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.small" },
  },
  "tabs.closeButton.default.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.icon.default" },
  },
  "tabs.closeButton.hover.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.icon.hover" },
  },
  "tabs.closeButton.pressed.iconColor": {
    type: COLOR,
    value: { ref: "colorScheme.icon.pressed" },
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
    transform: { alpha: 0.35 },
  },
  "tabs.underline.wrapper.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.small" },
  },
  "tabs.underline.tab.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.large" },
  },
  "tabs.underline.tab.paddingBottom": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "tabs.underline.tab.paddingVertical": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "tabs.underline.hover.haloColor": {
    type: COLOR,
    value: { ref: "colorScheme.reference.base" },
    transform: { alpha: 0.85 },
  },
  "tabs.underline.active.haloColor": {
    type: COLOR,
    value: { ref: "colorScheme.reference.accent" },
  },
  /**
   * ## Variants
   *
   * ### Box
   *
   */
  "tabs.box.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.background.transparent" },
  },
  "tabs.box.tab.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "density.spacings.small" },
  },
  "tabs.box.tab.paddingVertical": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "tabs.box.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" },
  },
  "tabs.box.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level100" },
    transform: { alpha: 0.5 },
  },
  "tabs.box.divider.borderColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" },
  },
  "tabs.box.dividerWidth": {
    type: LENGTH,
    value: { ref: "divider.borderWidth" },
  },
  "tabs.box.dividerHeight": {
    type: LENGTH,
    value: "18px",
  },
  /**
   * ## Variants
   *
   * ### Canvas
   *
   */
  "tabs.canvas.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.background.transparent" },
  },
  "tabs.canvas.tab.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" },
  },
  "tabs.canvas.tab.paddingVertical": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "tabs.canvas.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level200" },
    transform: { alpha: 0.5 },
  },
  "tabs.canvas.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surface.level200" },
  },
  "tabs.canvas.divider.borderColor": {
    type: COLOR,
    value: { ref: "colorScheme.divider.heavyweight" },
  },
  "tabs.canvas.dividerWidth": {
    type: LENGTH,
    value: { ref: "divider.borderWidth" },
  },
  "tabs.canvas.dividerHeight": {
    type: LENGTH,
    value: "18px",
  },
};
