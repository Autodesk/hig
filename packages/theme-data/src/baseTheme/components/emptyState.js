import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  LENGTH,
  SPACING,
} from "../../consts/types";

export default {
  "emptyState.text.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "emptyState.text.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "emptyState.text.headline.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.mediumExtraExtraLarge",
    },
  },
  "emptyState.text.tagline.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.mediumLarge",
    },
  },
  "emptyState.text.supportingText.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.mediumMedium",
    },
  },
  "emptyState.text.headline.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "emptyState.text.tagline.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium",
    },
  },
  "emptyState.text.supportingText.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "emptyState.text.headline.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.mediumMedium",
    },
  },
  "emptyState.text.tagline.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.mediumLarge",
    },
  },
  "emptyState.text.supportingText.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.mediumExtraLarge",
    },
  },
  "emptyState.text.headline.paddingBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraLarge",
    },
  },
  "emptyState.text.tagline.paddingTop": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraLarge",
    },
  },
  "emptyState.text.supportingText.paddingTop": {
    type: SPACING,
    value: {
      ref: "basics.spacings.none",
    },
  },
  "emptyState.button.paddingTop": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraLarge",
    },
  },
  "emptyState.image.height": {
    type: LENGTH,
    value: "150px",
  },
  "emptyState.image.width": {
    type: LENGTH,
    value: "266px",
  },
  "emptyState.maxWidth": {
    type: LENGTH,
    value: "700px",
  },
};
