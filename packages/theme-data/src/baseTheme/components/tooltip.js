import { BORDER_RADIUS, COLOR, FONT_WEIGHT, LENGTH } from "../../consts/types";

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
  "tooltip.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "tooltip.nub.hypotenuseLength": {
    type: LENGTH,
    value: "16px"
  }
};
