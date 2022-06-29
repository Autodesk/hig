import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
} from "../../consts/types";

export default {
  "accordion.header.fontColor": {
    type: COLOR,
    value: { ref: "colorScheme.text.default" },
  },
  "accordion.header.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" },
  },
  "accordion.header.fontSize": {
    type: FONT_SIZE,
    value: { ref: "density.fontSizes.medium" },
  },
  "accordion.header.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" },
  },
  "accordion.header.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "basics.lineHeights.mediumExtraLarge" },
  },
  "accordion.header.backgroundColor": {
    type: COLOR,
    value: { ref: "basics.colors.primary.charcoal.600" },
    transform: { alpha: 0.1 },
  },
  "accordion.header.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "accordion.header.paddingVertical": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "accordion.header.indicatorGutter": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" },
  },
  "accordion.header.indicatorSize": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" },
  },
  "accordion.header.default.indicatorColor": {
    type: COLOR,
    value: { ref: "colorScheme.indicator.default" },
  },
  "accordion.header.hover.indicatorColor": {
    type: COLOR,
    value: { ref: "colorScheme.indicator.hover" },
  },
  "accordion.header.indicatorRight.paddingLeft": {
    type: LENGTH,
    value: { ref: "density.spacings.small" },
  },
  "accordion.header.indicatorRight.paddingRight": {
    type: LENGTH,
    value: { ref: "density.spacings.small" },
  },
};
