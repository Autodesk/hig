import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT
} from "../../consts/types";

export default {
  "timestamp.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.dim"
    }
  },
  "timestamp.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "timestamp.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "timestamp.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "timestamp.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.fontSizes.highExtraLarge"
    }
  }
};
