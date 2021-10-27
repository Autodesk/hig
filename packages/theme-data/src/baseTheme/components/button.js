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
  },
  /**
   *  ## Deprecated
   *
   *
   */
  "button.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "button.label.fontWeight"
    }
  },
  "button.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "button.label.lineHeight"
    }
  },
  "button.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "button.label.fontFamily"
    }
  },
  "button.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "button.label.fontSize"
    }
  },
  "button.gutter": {
    type: LENGTH,
    value: {
      ref: "button.gutterWidth"
    },
    comment: `
      The space between elements with the component.
      E.g. The space between an icon and label within a button.`
  },
  "button.horizontalPadding": {
    type: LENGTH,
    value: {
      ref: "button.paddingHorizontal"
    }
  },
  "button.minimumWidth": {
    type: LENGTH,
    value: {
      ref: "button.minWidth"
    }
  },
  "button.verticalPadding": {
    type: LENGTH,
    value: {
      ref: "button.paddingVertical"
    }
  },
  "button.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "button.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "button.hover.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "button.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "button.haloWidth"
    }
  },
  "button.pressed.halo.width": {
    type: LENGTH,
    value: {
      ref: "button.pressed.haloWidth"
    }
  },
  "button.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.haloColor"
    }
  },
  "button.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.haloColor"
    }
  },
  "button.outline.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.default.backgroundColor"
    }
  },
  "button.outline.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.default.borderColor"
    }
  },
  "button.outline.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.halo.color"
    }
  },
  "button.outline.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.icon.color"
    }
  },
  "button.outline.focus.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.textColor"
    }
  },
  "button.outline.halo.color": {
    type: COLOR,
    value: {
      ref: "button.halo.color"
    }
  },
  "button.outline.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "button.hover.haloColor"
    }
  },
  "button.outline.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.iconColor"
    }
  },
  "button.outline.hover.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.label.fontColor"
    }
  },
  "button.outline.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.iconColor"
    }
  },
  "button.outline.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.haloColor"
    }
  },
  "button.outline.pressed.haloWidth": {
    type: LENGTH,
    value: {
      ref: "button.pressed.haloWidth"
    }
  },
  "button.outline.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.iconColor"
    }
  },
  "button.outline.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.label.fontColor"
    }
  },
  "button.outline.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.label.fontColor"
    }
  },
  "button.solid.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.solid.default.backgroundColor"
    }
  },
  "button.solid.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.default.borderColor"
    }
  },
  "button.solid.halo.color": {
    type: COLOR,
    value: {
      ref: "button.halo.color"
    }
  },
  "button.solid.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.label.fontColor"
    }
  },
  "button.solid.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.iconColor"
    }
  },
  "button.solid.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "button.hover.haloColor"
    }
  },
  "button.solid.hover.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.label.fontColor"
    }
  },
  "button.solid.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.iconColor"
    }
  },
  "button.solid.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.haloColor"
    }
  },
  "button.solid.focus.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.label.fontColor"
    }
  },
  "button.solid.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.iconColor"
    }
  },
  "button.solid.pressed.haloWidth": {
    type: LENGTH,
    value: {
      ref: "button.pressed.haloWidth"
    }
  },
  "button.solid.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.haloColor"
    }
  },
  "button.solid.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.label.fontColor"
    }
  },
  "button.solid.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.iconColor"
    }
  },
  "button.flat.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.backgroundColor"
    }
  },
  "button.flat.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.default.borderColor"
    }
  },
  "button.flat.halo.color": {
    type: COLOR,
    value: {
      ref: "button.halo.color"
    }
  },
  "button.flat.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.label.fontColor"
    }
  },
  "button.flat.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.iconColor"
    }
  },
  "button.flat.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "button.hover.haloColor"
    }
  },
  "button.flat.hover.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.label.fontColor"
    }
  },
  "button.flat.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.iconColor"
    }
  },
  "button.flat.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.haloColor"
    }
  },
  "button.flat.focus.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.label.fontColor"
    }
  },
  "button.flat.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.iconColor"
    }
  },
  "button.flat.pressed.haloWidth": {
    type: LENGTH,
    value: {
      ref: "button.pressed.haloWidth"
    }
  },
  "button.flat.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.haloColor"
    }
  },
  "button.flat.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.label.fontColor"
    }
  },
  "button.flat.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.iconColor"
    }
  }
};
