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
      ref: "basics.borderRadii.large"
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
      ref: "basics.fontWeights.regular"
    }
  },
  "button.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium"
    }
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
      ref: "density.spacings.medium"
    }
  },
  /**
   * ## Size
   */
  "button.large.horizontalPadding": {
    type: LENGTH,
    value: {
      ref: "density.spacings.large"
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
      ref: "basics.colors.charcoal600"
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
      ref: "basics.colors.charcoal600"
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
      ref: "basics.colors.autodeskBlue500"
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
      ref: "basics.colors.autodeskBlue500"
    }
  },

  /**
   * ### Disabled
   */
  "button.disabled.halo.width": {
    type: LENGTH,
    value: "0"
  },
  "button.disabled.halo.color": transparentColor,

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
      ref: "basics.colors.charcoal600"
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
      ref: "basics.colors.textAgainstLight"
    }
  },
  "button.outline.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.textAgainstLight"
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
      ref: "basics.colors.charcoal600"
    },
    transform: {
      alpha: 0.4
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
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    },
    transform: {
      alpha: 0.4
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
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.outline.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
    },
    transform: {
      alpha: 0.4
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
   * #### Disabled
   */
  "button.outline.disabled.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.backgroundColor"
    },
    transform: {
      alpha: 0.2
    }
  },
  "button.outline.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.borderColor"
    },
    transform: {
      alpha: 0.2
    }
  },
  "button.outline.disabled.halo.color": {
    type: COLOR,
    value: {
      ref: "button.disabled.halo.color"
    },
    transform: {
      alpha: 0.2
    }
  },
  "button.outline.disabled.textColor": {
    type: COLOR,
    value: {
      ref: "button.outline.textColor"
    },
    transform: {
      alpha: 0.2
    }
  },
  "button.outline.disabled.icon.color": {
    type: COLOR,
    value: {
      ref: "button.outline.icon.color"
    },
    transform: {
      alpha: 0.2
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
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue500"
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
      ref: "basics.colors.autodeskBlue500"
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
      ref: "basics.colors.charcoal600"
    },
    transform: {
      alpha: 0.4
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
      ref: "basics.colors.autodeskBlue500"
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
      ref: "basics.colors.autodeskBlue500"
    },
    transform: {
      alpha: 0.4
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
      ref: "basics.colors.autodeskBlue500"
    },
    transform: {
      alpha: 0.4
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
   * #### Disabled
   */
  "button.solid.disabled.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.solid.backgroundColor"
    },
    transform: {
      alpha: 0.4
    }
  },
  "button.solid.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "button.solid.borderColor",
      transform: {
        alpha: 0.2
      }
    }
  },
  "button.solid.disabled.halo.color": {
    type: COLOR,
    value: {
      ref: "button.disabled.halo.color"
    }
  },
  "button.solid.disabled.textColor": {
    type: COLOR,
    value: {
      ref: "button.solid.textColor",
      transform: {
        alpha: 0.2
      }
    }
  },
  "button.solid.disabled.icon.color": {
    type: COLOR,
    value: {
      ref: "button.solid.icon.color",
      transform: {
        alpha: 0.2
      }
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
    value: {
      ref: "basics.colors.autodeskBlue700"
    }
  },
  "button.flat.icon.color": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue700"
    }
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
    },
    transform: {
      alpha: 0.4
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
      ref: "basics.colors.autodeskBlue500"
    },
    transform: {
      alpha: 0.4
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
      ref: "basics.colors.autodeskBlue500"
    },
    transform: {
      alpha: 0.4
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
  },

  /**
   * #### Disabled
   */
  "button.flat.disabled.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.flat.backgroundColor",
      transform: {
        alpha: 0.2
      }
    }
  },
  "button.flat.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "button.flat.borderColor",
      transform: {
        alpha: 0.2
      }
    }
  },
  "button.flat.disabled.halo.color": {
    type: COLOR,
    value: {
      ref: "button.disabled.halo.color",
      transform: {
        alpha: 0.2
      }
    }
  },
  "button.flat.disabled.textColor": {
    type: COLOR,
    value: {
      ref: "button.flat.textColor"
    },
    transform: {
      alpha: 0.4
    }
  },
  "button.flat.disabled.icon.color": {
    type: COLOR,
    value: {
      ref: "button.flat.icon.color",
      transform: {
        alpha: 0.2
      }
    }
  }
};
