import { COLOR, BORDER_WIDTH, BORDER_RADIUS, LENGTH } from "../../consts/types";

export default {
  "checkbox.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "checkbox.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none",
    },
  },
  "checkbox.minHeight": {
    type: LENGTH,
    value: "16px",
  },
  "checkbox.indicatorColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "checkbox.minWidth": {
    type: LENGTH,
    value: "16px",
  },
  "checkbox.unchecked.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "checkbox.unchecked.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base",
    },
  },
  "checkbox.unchecked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base",
    },
  },
  "checkbox.unchecked.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "checkbox.unchecked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base",
    },
  },
  "checkbox.checked.default.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
  },
  "checkbox.checked.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
  },
  "checkbox.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "checkbox.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover",
    },
  },
  "checkbox.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed",
    },
  },
  "checkbox.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "checkbox.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "checkbox.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large",
    },
  },
  "checkbox.unchecked.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "checkbox.unchecked.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "checkbox.unchecked.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "checkbox.checked.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
  },
  "checkbox.checked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
  },
  "checkbox.checked.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
  },
  "checkbox.checked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
  },
};
