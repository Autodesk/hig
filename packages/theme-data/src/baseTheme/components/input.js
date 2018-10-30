import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_FAMILY,
  LINE_HEIGHT,
  LENGTH
} from "../../consts/types";

export default {
  "input.horizontalPadding": {
    type: LENGTH,
    value: { ref: "basics.spacings.none" }
  },
  "input.boxType.horizontalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "input.verticalPadding": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "input.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.small"
    }
  },
  "input.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "input.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "input.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.textColor"
    }
  },
  "input.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "input.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "input.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "input.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium"
    }
  },
  "input.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.15
    }
  },
  "input.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.none"
    }
  },
  "input.gutterWidth": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "input.placeholder.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.textColorDim"
    }
  },

  // Hover
  "input.hover.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "input.hover.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },

  // Focus
  "input.focus.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "input.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "input.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.25
    }
  },

  // Active
  "input.active.halo.width": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "input.active.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.25
    }
  },

  // Disabled
  "input.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "input.disabled.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.textColor"
    },
    transform: {
      alpha: 0.2
    }
  }
};
