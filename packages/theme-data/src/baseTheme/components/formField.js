import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_FAMILY,
  LINE_HEIGHT,
  LENGTH
} from "../../consts/types";

export default {
  "formField.instructionalText.fontSize": {
    type: FONT_SIZE,
    value: { ref: "density.fontSizes.small" }
  },
  "formField.instructionalText.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "formField.instructionalText.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" }
  },
  "formField.instructionalText.fontColor": {
    type: COLOR
  },
  "formField.instructionalText.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "basics.lineHeights.medium" }
  },
  "formField.icon.width": {
    type: LENGTH,
    value: "24px"
  },
  "formField.icon.paddingRight": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "formField.icon.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  }
};
