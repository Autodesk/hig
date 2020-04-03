import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_FAMILY,
  LINE_HEIGHT
} from "../../consts/types";

export default {
  "label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "label.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.charcoal900"
    },
    transform: {
      alpha: 0.9
    }
  },
  "label.hover.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.charcoal900"
    },
    transform: {
      alpha: 0.9
    }
  },
  "label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "label.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium"
    }
  },
  "label.top.fontSize": {
    type: FONT_SIZE,
    value: "12px"
  }
};
