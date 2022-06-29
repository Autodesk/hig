import {
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
} from "../../consts/types";

export default {
  "tooltip.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.surface.darkGray.100",
    },
  },
  "tooltip.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium",
    },
  },
  "tooltip.shadowBlur": {
    type: LENGTH,
    value: {
      ref: "basics.shadows.highBlur",
    },
  },
  "tooltip.shadowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.shadow.high",
    },
  },
  "tooltip.title.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level200",
    },
  },
  "tooltip.title.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "tooltip.title.fontSize": {
    type: FONT_SIZE,
    value: "12px",
  },
  "tooltip.title.fontWeight": {
    type: FONT_WEIGHT,
    value: 700,
  },
  "tooltip.title.lineHeight": {
    type: LINE_HEIGHT,
    value: 1.333333333,
  },
  "tooltip.nub.hypotenuseLength": {
    type: LENGTH,
    value: "16px",
  },
  "tooltip.description.fontColor": {
    type: COLOR,
    value: "#F5F5F5",
  },
  "tooltip.description.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "tooltip.description.fontSize": {
    type: FONT_SIZE,
    value: "12px",
  },
  "tooltip.description.fontWeight": {
    type: FONT_WEIGHT,
    value: 400,
  },
  "tooltip.description.lineHeight": {
    type: LINE_HEIGHT,
    value: 1.333333333,
  },
  "tooltip.divider.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
    transform: {
      alpha: 0.1,
    },
  },
};
