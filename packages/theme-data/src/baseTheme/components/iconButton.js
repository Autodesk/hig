import { BORDER_RADIUS, COLOR, LENGTH, BORDER_WIDTH } from "../../consts/types";

export default {
  "iconButton.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "button.borderRadius",
    },
  },
  "iconButton.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderRadii.small",
    },
  },
  "iconButton.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "button.focus.haloColor",
    },
  },
  "iconButton.focus.haloWidth": {
    type: LENGTH,
    value: {
      ref: "button.haloWidth",
    },
  },
  /**
   * ## Variants
   *
   * ### Dynamic
   *
   */
  "iconButton.dynamic.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.dynamic.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.dynamic.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.dynamic.default.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.default",
    },
  },
  "iconButton.dynamic.hover.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.hover",
    },
  },
  "iconButton.dynamic.focus.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.focus",
    },
  },
  "iconButton.dynamic.pressed.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.pressed",
    },
  },
  "iconButton.dynamic.on.default.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.on.default",
    },
  },
  "iconButton.dynamic.on.hover.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.700",
    },
  },
  "iconButton.dynamic.on.focus.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.on.default",
    },
  },
  "iconButton.dynamic.on.pressed.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.700",
    },
  },
  "iconButton.dynamic.pressed.100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed",
    },
  },
  "iconButton.dynamic.pressed.300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.pressed",
    },
  },
  /**
   * ## Variants
   *
   * ### Static
   *
   */
  "iconButton.static.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.static.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.static.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.static.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.static.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.static.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "iconButton.static.on.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover",
    },
  },
  "iconButton.static.on.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover",
    },
  },
  "iconButton.static.on.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus",
    },
  },
  "iconButton.static.on.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.pressed",
    },
  },
  "iconButton.static.on.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on",
    },
  },
  "iconButton.static.on.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "iconButton.static.on.default.borderColor",
    },
  },
  "iconButton.static.on.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent",
    },
  },
  "iconButton.static.on.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on",
    },
  },
  "iconButton.static.hover.100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover",
    },
  },
  "iconButton.static.pressed.100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed",
    },
  },
  "iconButton.static.hover.300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.hover",
    },
  },
  "iconButton.static.pressed.300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.pressed",
    },
  },
  "iconButton.static.on.hover.100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent",
    },
    transform: {
      alpha: 0.35,
    },
  },
  "iconButton.static.on.hover.300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "iconButton.static.on.hover.100To250BackgroundColor",
    },
  },
};
