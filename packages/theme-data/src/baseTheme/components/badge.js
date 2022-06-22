import {
  BORDER_WIDTH,
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  LENGTH,
  SPACING,
} from "../../consts/types";

export default {
  "badge.text.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "badge.text.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.highSmall",
    },
  },
  "badge.text.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold",
    },
  },
  "badge.text.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.highSmall",
    },
  },
  "badge.text.padding.horizontal": {
    type: SPACING,
    value: {
      ref: "basics.spacings.highSmall",
    },
  },
  "badge.text.cornerRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.pill",
    },
  },
  "badge.text.minHeight": {
    type: LENGTH,
    value: "20px",
  },
  "badge.icon.cornerRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.ellipse",
    },
  },
  "badge.icon.large.minHeight": {
    type: LENGTH,
    value: "28px",
  },
  "badge.icon.small.minHeight": {
    type: LENGTH,
    value: "20px",
  },
  "badge.dot.cornerRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.ellipse",
    },
  },
  "badge.dot.large.minHeight": {
    type: LENGTH,
    value: "12px",
  },
  "badge.dot.small.minHeight": {
    type: LENGTH,
    value: "8px",
  },
  "badge.outline.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "badge.outline.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "badge.green.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.success",
    },
  },
  "badge.green.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "badge.green.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "badge.orange.backgroundColor": {
    type: COLOR,
    value: "#fe8d55",
  },
  "badge.orange.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black",
    },
  },
  "badge.orange.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "badge.red.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.error",
    },
  },
  "badge.red.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "badge.red.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "badge.yellow.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.warning",
    },
  },
  "badge.yellow.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black",
    },
  },
  "badge.yellow.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
};
