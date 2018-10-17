export default {
  "input.horizontalPadding": {
    type: "length",
    value: { ref: "basics.spacings.none" }
  },
  "input.boxType.horizontalPadding": {
    type: "length",
    value: { ref: "density.spacings.extraSmall" }
  },
  "input.verticalPadding": {
    type: "length",
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "input.borderRadius": {
    type: "borderRadius",
    value: {
      ref: "basics.borderRadii.small"
    }
  },
  "input.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.surfaceLevel15Color"
    }
  },
  "input.borderWidth": {
    type: "borderWidth",
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.borderBottomColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "input.borderBottomWidth": {
    type: "borderWidth",
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.fontColor": {
    type: "color",
    value: {
      ref: "colorScheme.textColor"
    }
  },
  "input.fontWeight": {
    type: "fontWeight",
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "input.fontFamily": {
    type: "fontFamily",
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "input.fontSize": {
    type: "fontSize",
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "input.lineHeight": {
    type: "lineHeight",
    value: {
      ref: "basics.lineHeights.medium"
    }
  },
  "input.halo.color": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.15
    }
  },
  "input.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.none"
    }
  },
  "input.gutterWidth": {
    type: "length",
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "input.placeholder.fontColor": {
    type: "color",
    value: {
      ref: "colorScheme.textColorDim"
    }
  },

  // Hover
  "input.hover.borderBottomColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "input.hover.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.large"
    }
  },

  // Focus
  "input.focus.borderBottomColor": {
    type: "color",
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "input.focus.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "input.focus.halo.color": {
    type: "color",
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.25
    }
  },

  // Active
  "input.active.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "input.active.halo.color": {
    type: "color",
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.25
    }
  },

  // Disabled
  "input.disabled.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.surfaceLevel15Color"
    }
  },
  "input.disabled.fontColor": {
    type: "color",
    value: {
      ref: "colorScheme.textColor"
    },
    transform: {
      alpha: 0.2
    }
  }
};
