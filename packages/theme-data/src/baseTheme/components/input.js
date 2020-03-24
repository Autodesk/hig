import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_FAMILY,
  LINE_HEIGHT,
  LENGTH,
  OPACITY
} from "../../consts/types";

export default {
  "input.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.25
    }
  },
  "input.active.halo.color": {
    type: COLOR,
    value: {
      ref: "input.focus.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.focus.haloColor"
      }
    }
  },
  "input.active.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "input.haloWidth"
      }
    }
  },
  "input.line.default.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.35
    }
  },
  "input.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "input.line.default.borderBottomColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.line.default.borderBottomColor"
      }
    }
  },
  "input.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.small"
    }
  },
  "input.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.box.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "input.box.backgroundColor": {
    type: COLOR,
    value: {
      ref: "input.box.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.box.default.backgroundColor"
      }
    }
  },
  "input.box.default.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.box.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "input.box.default.borderBottomColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.box.default.borderBottomColor"
      }
    }
  },
  "input.box.paddingHorizontal": {
    type: LENGTH,
    value: "12px"
  },
  "input.boxType.horizontalPadding": {
    type: LENGTH,
    value: {
      ref: "input.box.paddingHorizontal"
    },
    metadata: {
      deprecated: {
        equivalent: "input.box.paddingHorizontal"
      }
    }
  },
  "input.disabled.opacity": {
    type: OPACITY,
    value: {
      ref: "colorScheme.opacity.disabled"
    }
  },
  "input.line.focus.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "input.focus.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "input.line.focus.borderBottomColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.line.focus.borderBottomColor"
      }
    }
  },
  "input.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "input.focus.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.focus.haloColor"
      }
    }
  },
  "input.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "input.haloWidth"
      }
    }
  },
  "input.value.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "input.fontColor": {
    type: COLOR,
    value: {
      ref: "input.value.fontColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontColor"
      }
    }
  },
  "input.value.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "input.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "input.value.fontFamily"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontFamily"
      }
    }
  },
  "input.value.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "input.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "input.value.fontSize"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontSize"
      }
    }
  },
  "input.value.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "input.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "input.value.fontWeight"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.fontWeight"
      }
    }
  },
  "input.gutterWidth": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "input.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "input.halo.color": {
    type: COLOR,
    value: {
      ref: "input.hover.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.hover.haloColor"
      }
    }
  },
  "input.haloWidth": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "input.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "input.haloWidth"
      }
    }
  },
  "input.minHeight": {
    type: LENGTH,
    value: "36px"
  },
  "input.height": {
    type: LENGTH,
    value: {
      ref: "input.minHeight"
    },
    metadata: {
      deprecated: {
        equivalent: "input.minHeight"
      }
    }
  },
  "input.value.highlightColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.highlightColor": {
    type: COLOR,
    value: {
      ref: "input.value.highlightColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.highlightColor"
      }
    }
  },
  "input.line.paddingHorizontal": {
    type: LENGTH,
    value: { ref: "basics.spacings.none" }
  },
  "input.horizontalPadding": {
    type: LENGTH,
    value: {
      ref: "input.line.paddingHorizontal"
    },
    metadata: {
      deprecated: {
        equivalent: "input.line.paddingHorizontal"
      }
    }
  },
  "input.line.hover.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "input.box.hover.borderBottomColor"
    }
  },
  "input.hover.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "input.box.hover.borderBottomColor"
    },
    metadata: {
      deprecated: {
        equivalent: "input.box.hover.borderBottomColor"
      }
    }
  },
  "input.hover.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "input.haloWidth"
      }
    }
  },
  "input.value.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.medium"
    }
  },
  "input.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "input.value.lineHeight"
    },
    metadata: {
      deprecated: {
        equivalent: "input.value.lineHeight"
      }
    }
  },
  "input.value.placeholderFontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.placeholder"
    }
  },
  "input.placeholder.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.placeholder"
    },
    metadata: {
      deprecated: {
        equivalent: "colorScheme.text.placeholder"
      }
    }
  },
  "input.paddingVertical": {
    type: LENGTH,
    value: "4px"
  },
  "input.verticalPadding": {
    type: LENGTH,
    value: {
      ref: "input.paddingVertical"
    },
    metadata: {
      deprecated: {
        equivalent: "input.paddingVertical"
      }
    }
  },
  "input.error.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.status.error"
    }
  },
  "input.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "input.box.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.box.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "input.box.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.box.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "input.box.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.box.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "input.box.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "input.box.focus.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "input.box.hover.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "input.box.pressed.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.85
    }
  },
  "input.line.pressed.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.85
    }
  },
  "input.indicator.default": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default"
    }
  },
  "input.indicator.focus": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.focus"
    }
  },
  "input.indicator.hover": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.hover"
    }
  },
  "input.indicator.pressed": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.pressed"
    }
  }
};
