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
  "stepIndicator.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "stepIndicator.connector.minWidth": {
    type: LENGTH,
    value: "2px"
  },
  "stepIndicator.minDiameter": {
    type: LENGTH,
    value: "22px"
  },
  "stepIndicator.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "stepIndicator.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "stepIndicator.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "stepIndicator.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "stepIndicator.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "stepIndicator.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "stepIndicator.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "stepIndicator.label.default.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "stepIndicator.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
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
  "stepIndicator.label.inProgress.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
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
  "stepIndicator.number.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "stepIndicator.number.inProgress.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500"
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
      ref: "colorScheme.background.active"
    }
  },
  "stepIndicator.incomplete.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
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
      ref: "colorScheme.transparent"
    }
  },
  "stepIndicator.inProgress.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.focus"
    }
  },
  "stepIndicator.completed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.active"
    }
  },
  "stepIndicator.completed.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  }
};
