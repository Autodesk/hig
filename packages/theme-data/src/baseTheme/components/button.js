import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
  COLOR
} from "../../consts/types";

const transparentColor = {
  type: COLOR,
  value: {
    ref: "basics.colors.white"
  },
  transform: {
    alpha: 0
  }
};

export default {
  // General
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
  "button.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "button.lineHeight": {
    type: LINE_HEIGHT
  },
  "button.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "button.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "button.gutter": {
    type: LENGTH,
    /** @todo */
    value: "4px",
    comment: `
      The space between elements with the component.
      E.g. The space between an icon and label within a button.`
  },
  "button.horizontalPadding": {
    type: LENGTH,
    value: {
      ref: "density.spacings.medium"
    }
  },
  "button.minimumWidth": {
    type: LENGTH,
    value: "10px"
  },
  "button.verticalPadding": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  /**
   * ## States
   *
   * ### Default
   */
  "button.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "button.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },

  /**
   * ### Hover
   */
  "button.hover.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "button.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.15
    }
  },

  /**
   * ### Focus
   */
  "button.focus.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "button.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },

  /**
   * ### Pressed
   */
  "button.pressed.halo.width": {
    type: LENGTH,
    value: "4px"
  },
  "button.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.25
    }
  },

  /**
   * ## Variants
   *
   * ### Outline
   *
   * #### Default
   */
  "button.outline.backgroundColor": transparentColor,
  "button.outline.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "button.outline.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.charcoal400"
    }
  },
  "button.outline.textColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.textColor"
    }
  },
  "button.outline.icon.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.textColor"
    }
  },

  /**
   * #### Hover
   */
  "button.outline.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    }
  },
  "button.outline.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.borderColor"
    }
  },
  "button.outline.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "button.hover.halo.color"
    }
  },
  "button.outline.hover.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.textColor"
    }
  },
  "button.outline.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.icon.color"
    }
  },

  /**
   * #### Focus
   */
  "button.outline.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    }
  },
  "button.outline.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "button.outline.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.halo.color"
    }
  },
  "button.outline.focus.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.textColor"
    }
  },
  "button.outline.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.icon.color"
    }
  },

  /**
   * #### Pressed
   */
  "button.outline.pressed.haloWidth": {
    type: LENGTH,
    value: "4px"
  },
  "button.outline.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    }
  },
  "button.outline.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.borderColor"
    }
  },
  "button.outline.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.halo.color"
    }
  },
  "button.outline.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.textColor"
    }
  },
  "button.outline.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.icon.color"
    }
  },

  /**
   * ### Solid
   *
   * #### Default
   */
  "button.solid.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "button.solid.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
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
      ref: "basics.colors.textAgainstDark"
    }
  },
  "button.solid.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.textAgainstDark"
    }
  },

  /**
   * #### Hover
   */
  "button.solid.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "button.solid.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.borderColor"
    }
  },
  "button.solid.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "button.hover.halo.color"
    }
  },
  "button.solid.hover.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.textColor"
    }
  },
  "button.solid.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.icon.color"
    }
  },

  /**
   * #### Focus
   */
  "button.solid.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "button.solid.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.borderColor"
    }
  },
  "button.solid.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.halo.color"
    }
  },
  "button.solid.focus.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.textColor"
    }
  },
  "button.solid.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.icon.color"
    }
  },

  /**
   * #### Pressed
   */
  "button.solid.pressed.haloWidth": {
    type: LENGTH,
    value: "4px"
  },
  "button.solid.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.solid.backgroundColor"
    }
  },
  "button.solid.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.borderColor"
    }
  },
  "button.solid.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.halo.color"
    }
  },
  "button.solid.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.textColor"
    }
  },
  "button.solid.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.icon.color"
    }
  },

  /**
   * ### Flat
   *
   * #### Default
   */
  "button.flat.backgroundColor": transparentColor,
  "button.flat.borderColor": transparentColor,
  "button.flat.halo.color": {
    type: COLOR,
    value: {
      ref: "button.halo.color"
    }
  },
  "button.flat.textColor": {
    type: COLOR,
    value: "#006EAF"
  },
  "button.flat.icon.color": {
    type: COLOR,
    value: "#006EAF"
  },

  /**
   * #### Hover
   */
  "button.flat.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.backgroundColor"
    }
  },
  "button.flat.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.borderColor"
    }
  },
  "button.flat.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "button.hover.halo.color"
    }
  },
  "button.flat.hover.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.textColor"
    }
  },
  "button.flat.hover.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.icon.color"
    }
  },

  /**
   * #### Focus
   */
  "button.flat.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.backgroundColor"
    }
  },
  "button.flat.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.borderColor"
    }
  },
  "button.flat.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.halo.color"
    }
  },
  "button.flat.focus.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.textColor"
    }
  },
  "button.flat.focus.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.icon.color"
    }
  },

  /**
   * #### Pressed
   */
  "button.flat.pressed.haloWidth": {
    type: LENGTH,
    value: "4px"
  },
  "button.flat.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.backgroundColor"
    }
  },
  "button.flat.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.borderColor"
    }
  },
  "button.flat.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "button.pressed.halo.color"
    }
  },
  "button.flat.pressed.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.textColor"
    }
  },
  "button.flat.pressed.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.icon.color"
    }
  }
};
