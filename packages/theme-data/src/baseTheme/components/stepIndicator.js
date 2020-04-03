import {
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  "stepIndicator.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "stepIndicator.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "stepIndicator.minDiameter": {
    type: LENGTH,
    value: "22px"
  },
  "stepIndicator.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "stepIndicator.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "stepIndicator.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "stepIndicator.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "stepIndicator.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "stepIndicator.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "stepIndicator.incomplete.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "stepIndicator.incomplete.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.200"
    }
  },
  "stepIndicator.inProgress.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "stepIndicator.inProgress.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "stepIndicator.completed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500"
    }
  },
  "stepIndicator.completed.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "stepIndicator.accordion.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.medium"
    }
  },
  "stepIndicator.accordion.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.large"
    }
  },
  "stepIndicator.connector.minWidth": {
    type: LENGTH,
    value: "2px"
  },
  "stepIndicator.connector.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.200"
    }
  },
  "stepIndicator.connector.active.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500"
    }
  },
  "stepIndicator.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "stepIndicator.label.default.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "stepIndicator.label.horizontal.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.spacings.small"
    }
  },
  "stepIndicator.label.horizontal.marginBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "stepIndicator.label.horizontal.marginTop": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "stepIndicator.label.vertical.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "stepIndicator.label.vertical.marginLeft": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "stepIndicator.label.inProgress.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "stepIndicator.number.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "stepIndicator.number.inProgress.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.active"
    }
  },
  "stepIndicator.number.inProgress.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "stepIndicator.number.incomplete.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    },
    transform: {
      alpha: 0.4
    }
  },
  "stepIndicator.number.incomplete.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  }
};
