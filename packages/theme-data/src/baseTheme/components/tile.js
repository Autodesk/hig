import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING
} from "../../consts/types";

export default {
  "tile.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "tile.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "tile.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "tile.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "tile.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "tile.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "tile.thumbnail.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "tile.title.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "tile.title.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "tile.title.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.highExtraLarge"
    }
  },
  "tile.title.marginBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "tile.subTitle.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small"
    }
  },
  "tile.subTitle.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "tile.subTitle.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.highMedium"
    }
  },
  "tile.default.level100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.1
    }
  },
  "tile.default.level300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.5
    }
  },
  "tile.selected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.5
    }
  },
  "tile.selected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.focus"
    }
  },
  "tile.hover.level100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.2
    }
  },
  "tile.hover.level300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.7
    }
  },
  "tile.selected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.5
    }
  },
  "tile.selected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.focus"
    }
  },
  "tile.focus.level100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.1
    }
  },
  "tile.focus.level300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.5
    }
  },
  "tile.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "tile.selected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.5
    }
  },
  "tile.selected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.focus"
    }
  },
  "tile.pressed.level100To250BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.3
    }
  },
  "tile.pressed.level300To350BackgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.9
    }
  }
};
