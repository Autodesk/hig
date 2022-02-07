import {
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  "menu.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "menu.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "menu.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.topFlushBorderTopRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.container.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "menu.divider.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "menu.divider.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "menu.header.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small"
    }
  },
  "menu.header.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "menu.header.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    },
    transform: {
      alpha: 0.5
    }
  },
  "menu.header.marginBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "menu.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "menu.label.default.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "menu.label.selected.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "menu.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "menu.shortcut.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.mediumSmall"
    }
  },
  "menu.shortcut.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "menu.shortcut.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.dim"
    }
  },
  "menu.item.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "menu.item.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "menu.item.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.hover.backgroundColor"
    }
  },
  "menu.item.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "menu.item.pressed.active.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.pressed.backgroundColor"
    }
  },
  "menu.item.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "menu.item.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "menu.item.minHeight": {
    type: LENGTH,
    value: "18px"
  },
  "menu.item.gutterWidth": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "menu.item.checkmark.hover.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default"
    }
  },
  "menu.item.checkmark.active.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.on"
    }
  },
  "menu.item.indicatorColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default"
    }
  },
  /**
   *  ## Deprecated
   *
   *
   */
  "menu.item.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.default.backgroundColor"
      }
    }
  },
  "menu.item.active.backgroundColor": {
    type: COLOR,
    value: {
      ref: "menu.item.pressed.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.pressed.backgroundColor"
      }
    }
  },
  "menu.item.horizontalPadding": {
    type: SPACING,
    value: {
      ref: "menu.item.paddingHorizontal"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.paddingHorizontal"
      }
    }
  },
  "menu.item.verticalPadding": {
    type: SPACING,
    value: {
      ref: "menu.item.paddingVertical"
    },
    metadata: {
      deprecated: {
        equivalent: "menu.item.paddingVertical"
      }
    }
  }
};
