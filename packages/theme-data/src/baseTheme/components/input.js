import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_FAMILY,
  LINE_HEIGHT,
  LENGTH,
  OPACITY,
} from "../../consts/types";

export default {
  "input.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "input.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "input.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
    transform: {
      alpha: 0.2,
    },
  },
  "input.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.small",
    },
  },
  "input.haloWidth": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.large",
    },
  },
  "input.minHeight": {
    type: LENGTH,
    value: "36px",
  },
  "input.paddingVertical": {
    type: LENGTH,
    value: "4px",
  },
  "input.gutterWidth": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraSmall",
    },
  },
  "input.disabled.opacity": {
    type: OPACITY,
    value: {
      ref: "colorScheme.opacity.disabled",
    },
  },
  "input.error.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.error",
    },
  },
  "input.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover",
    },
  },
  "input.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent",
    },
    transform: {
      alpha: 0.25,
    },
  },
  "input.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed",
    },
  },
  "input.value.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "input.value.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "input.value.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "input.value.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium",
    },
  },
  "input.value.highlightColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent",
    },
    transform: {
      alpha: 0.2,
    },
  },
  "input.value.error.highlightColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.error",
    },
    transform: {
      alpha: 0.25,
    },
  },
  "input.value.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium",
    },
  },
  "input.value.placeholderFontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.placeholder",
    },
  },
  "input.indicator.default": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default",
    },
  },
  "input.indicator.focus": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.focus",
    },
  },
  "input.indicator.hover": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.hover",
    },
  },
  "input.indicator.pressed": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.pressed",
    },
  },
  /**
   * ## Variants
   *
   * ### Line
   *
   */
  "input.line.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "basics.spacings.none" },
  },
  "input.line.default.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
    transform: {
      alpha: 0.35,
    },
  },
  "input.line.hover.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "input.box.hover.borderBottomColor",
    },
  },
  "input.line.focus.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "input.line.pressed.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
    transform: {
      alpha: 0.85,
    },
  },
  /**
   * ## Variants
   *
   * ### Box
   *
   */
  "input.box.paddingHorizontal": {
    type: LENGTH,
    value: "12px",
  },
  "input.box.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "input.box.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "input.box.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "input.box.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "input.box.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
    transform: {
      alpha: 0.2,
    },
  },
  "input.box.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "input.box.default.borderColor",
    },
  },
  "input.box.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "input.box.default.borderColor",
    },
  },
  "input.box.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "input.box.default.borderColor",
    },
  },
  "input.box.default.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
    transform: {
      alpha: 0.2,
    },
  },
  "input.box.hover.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
  },
  "input.box.focus.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "input.box.pressed.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
    transform: {
      alpha: 0.85,
    },
  },
  "input.textArea.line.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
    transform: {
      alpha: 0.2,
    },
  },
};
