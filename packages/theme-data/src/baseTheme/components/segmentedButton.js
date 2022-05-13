import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING,
} from "../../consts/types";

export default {
  "segmentedButton.borderRadius": {
    value: {
      ref: "button.borderRadius",
    },
    type: BORDER_RADIUS,
  },
  "segmentedButton.borderWidth": {
    value: {
      ref: "button.borderWidth",
    },
    type: BORDER_WIDTH,
  },
  "segmentedButton.gutterWidth": {
    value: {
      ref: "button.gutterWidth",
    },
    type: LENGTH,
  },
  "segmentedButton.minWidth": {
    value: {
      ref: "button.minWidth",
    },
    type: LENGTH,
  },
  "segmentedButton.paddingHorizontal": {
    value: {
      ref: "button.paddingHorizontal",
    },
    type: SPACING,
  },
  "segmentedButton.paddingVertical": {
    value: {
      ref: "button.paddingVertical",
    },
    type: SPACING,
  },
  "segmentedButton.default.backgroundColor": {
    value: {
      ref: "button.outline.default.backgroundColor",
    },
    type: COLOR,
  },
  "segmentedButton.hover.backgroundColor": {
    value: {
      ref: "button.outline.hover.backgroundColor",
    },
    type: COLOR,
  },
  "segmentedButton.focus.backgroundColor": {
    value: {
      ref: "button.outline.focus.backgroundColor",
    },
    type: COLOR,
  },
  "segmentedButton.pressed.backgroundColor": {
    value: {
      ref: "button.outline.pressed.backgroundColor",
    },
    type: COLOR,
  },
  "segmentedButton.default.borderColor": {
    value: {
      ref: "button.outline.default.borderColor",
    },
    type: COLOR,
  },
  "segmentedButton.hover.borderColor": {
    value: {
      ref: "button.outline.hover.borderColor",
    },
    type: COLOR,
  },
  "segmentedButton.focus.borderColor": {
    value: {
      ref: "button.outline.focus.borderColor",
    },
    type: COLOR,
  },
  "segmentedButton.pressed.borderColor": {
    value: {
      ref: "button.outline.pressed.borderColor",
    },
    type: COLOR,
  },
  "segmentedButton.hover.haloWidth": {
    value: {
      ref: "button.hover.haloWidth",
    },
    type: BORDER_WIDTH,
  },
  "segmentedButton.focus.haloWidth": {
    value: {
      ref: "button.haloWidth",
    },
    type: BORDER_WIDTH,
  },
  "segmentedButton.pressed.haloWidth": {
    value: {
      ref: "button.pressed.haloWidth",
    },
    type: BORDER_WIDTH,
  },
  "segmentedButton.hover.haloColor": {
    value: {
      ref: "button.hover.haloColor",
    },
    type: COLOR,
  },
  "segmentedButton.focus.haloColor": {
    value: {
      ref: "button.focus.haloColor",
    },
    type: COLOR,
  },
  "segmentedButton.pressed.haloColor": {
    value: {
      ref: "button.pressed.haloColor",
    },
    type: COLOR,
  },
  "segmentedButton.default.iconColor": {
    value: {
      ref: "button.outline.iconColor",
    },
    type: COLOR,
  },
  "segmentedButton.active.iconColor": {
    value: {
      ref: "colorScheme.surface.level250",
    },
    type: COLOR,
  },
  "segmentedButton.active.backgroundColor": {
    value: {
      ref: "colorScheme.reference.base",
    },
    type: COLOR,
  },
  "segmentedButton.label.fontSize": {
    value: {
      ref: "button.label.fontSize",
    },
    type: FONT_SIZE,
  },
  "segmentedButton.label.default.fontColor": {
    value: {
      ref: "button.outline.label.fontColor",
    },
    type: COLOR,
  },
  "segmentedButton.label.default.fontWeight": {
    value: {
      ref: "button.label.fontWeight",
    },
    type: FONT_WEIGHT,
  },
  "segmentedButton.label.active.fontColor": {
    value: {
      ref: "basics.colors.text.againstDark",
    },
    type: COLOR,
  },
  "segmentedButton.label.active.fontWeight": {
    value: {
      ref: "basics.fontWeights.bold",
    },
    type: FONT_WEIGHT,
  },
};
