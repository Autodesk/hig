import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT
} from "../../consts/types";

export default {
  "button.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium"
    }
  },
  "button.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "button.minWidth": {
    type: LENGTH,
    value: "10px"
  },
  "button.paddingHorizontal": {
    type: LENGTH,
    value: {
      ref: "density.spacings.medium"
    }
  },
  "button.paddingVertical": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "button.gutterWidth": {
    type: LENGTH,
    value: "4px",
    comment: `
      The space between elements with the component.
      E.g. The space between an icon and label within a button.`
  },
  "button.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "button.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "button.label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "button.label.lineHeight": {
    type: LINE_HEIGHT,
    value: "18px"
  },
  "button.haloWidth": {
    type: LENGTH,
    value: "2px"
  },
  "button.hover.haloWidth": {
    type: LENGTH,
    value: "2px"
  },
  "button.pressed.haloWidth": {
    type: LENGTH,
    value: "4px"
  },
  "button.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.15
    }
  },
  "button.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.35
    }
  },
  "button.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.25
    }
  },
  /**
   * ## Variants
   *
   * ### Solid
   *
   */
  "button.solid.label.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "button.solid.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "button.solid.indicatorColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "button.solid.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    }
  },
  "button.solid.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    }
  },
  "button.solid.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    }
  },
  "button.solid.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.solid.default.backgroundColor"
    }
  },
  "button.solid.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    }
  },
  "button.solid.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.borderColor"
    }
  },
  "button.solid.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.default.borderColor"
    }
  },
  "button.solid.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.default.borderColor"
    }
  },
  /**
   * ## Variants
   *
   * ### Outline
   *
   */
  "button.outline.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "button.outline.indicatorColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default"
    }
  },
  "button.outline.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.default"
    }
  },
  "button.outline.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "button.outline.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    }
  },
  "button.outline.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    }
  },
  "button.outline.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    }
  },
  "button.outline.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.5
    }
  },
  "button.outline.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.borderColor"
    }
  },
  "button.outline.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    }
  },
  "button.outline.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.85
    }
  },
  /**
   * ## Variants
   *
   * ### Flat
   *
   */
  "button.flat.label.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.700"
    }
  },
  "button.flat.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.700"
    }
  },
  "button.flat.indicatorColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.700"
    }
  },
  "button.flat.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "button.flat.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.backgroundColor"
    }
  },
  "button.flat.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.backgroundColor"
    }
  },
  "button.flat.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.backgroundColor"
    }
  },
  "button.flat.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "button.flat.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.borderColor"
    }
  },
  "button.flat.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.borderColor"
    }
  },
  "button.flat.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.borderColor"
    }
  }
};
