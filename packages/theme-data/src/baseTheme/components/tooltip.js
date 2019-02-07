import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "tooltip.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.surfaceDarkGrayLevel100"
    }
  },
  "tooltip.borderColor": {
    type: COLOR,
    value: {
      ref: "tooltip.backgroundColor"
    }
  },
  "tooltip.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium"
    }
  },
  "tooltip.shadowBlur": {
    type: LENGTH,
    value: {
      ref: "basics.shadows.highBlur"
    }
  },
  "tooltip.shadowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.highShadowColor"
    }
  },
  "tooltip.textColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surfaceLevel200Color"
    }
  },
  "tooltip.nub.hypotenuseLength": {
    type: LENGTH,
    value: "16px"
  }
};
