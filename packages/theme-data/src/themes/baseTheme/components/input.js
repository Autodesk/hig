export default {
  "input.horizontalPadding": {
    type: "length",
    value: { ref: "basics.spacings.none" }
  },
  "input.boxType.horizontalPadding": {
    type: "length",
    value: { ref: "density.spacings.xs" }
  },
  "input.verticalPadding": {
    type: "length",
    value: {
      ref: "density.spacings.xxs"
    }
  },
  "input.borderRadius": {
    type: "borderRadius",
    value: {
      ref: "basics.borderRadii.s"
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
      ref: "basics.borderWidths.s"
    }
  },
  "input.borderBottomColor": {
    type: "color"
  },
  "input.borderBottomWidth": {
    type: "borderWidth",
    value: {
      ref: "basics.borderWidths.s"
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
      ref: "density.fontSizes.m"
    }
  },
  "input.lineHeight": {
    type: "lineHeight",
    value: {
      ref: "basics.lineHeights.m"
    }
  },
  "input.halo.color": {
    type: "color"
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
      ref: "density.spacings.xs"
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
    type: "color"
  },
  "input.hover.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.l"
    }
  },

  // Focus
  "input.focus.borderBottomColor": {
    type: "color"
  },
  "input.focus.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.l"
    }
  },
  "input.focus.halo.color": {
    type: "color"
  },

  // Active
  "input.active.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.l"
    }
  },
  "input.active.halo.color": {
    type: "color"
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
