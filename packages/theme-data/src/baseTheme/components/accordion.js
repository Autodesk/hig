import {
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT
} from "../../consts/types";

export default {
  "accordion.header.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.1 }
  },
  "accordion.header.verticalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "accordion.header.horizontalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "accordion.header.indicatorOnRight.paddingLeft": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "accordion.header.indicatorOnRight.paddingRight": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" }
  },
  "accordion.header.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" }
  },
  "accordion.header.fontSize": {
    type: FONT_SIZE,
    value: { ref: "typography.body.fontSize" }
  },
  "accordion.header.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" }
  },
  "accordion.header.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "basics.lineHeights.mediumExtraLarge" }
  },
  "accordion.header.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  },
  "accordion.header.indicator.size": {
    type: LENGTH,
    value: { ref: "basics.spacings.mediumMedium" }
  },
  "accordion.header.indicator.gutter": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "accordion.header.indicator.color": {
    type: COLOR,
    value: { ref: "colorScheme.iconColor" }
  },
  "accordion.header.hover.indicator.color": {
    type: COLOR,
    value: { ref: "colorScheme.textColor" }
  }
};
