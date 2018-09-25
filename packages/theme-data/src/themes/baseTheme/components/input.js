export default {
  "input.horizontalPadding": {
    type: "length",
    value: { ref: "basics.spacings.none" }
  },
  "input.boxType.horizontalPadding": {
    type: "length",
    value: { ref: "density.spacings.XS" }
  },
  "input.verticalPadding": {
    type: "length",
    value: {
      ref: "density.spacings.XXS"
    }
  },
  "input.borderRadius": {
    type: "borderRadius",
    value: {
      ref: "basics.borderRadii.S"
    }
  },
  "input.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.surfaceLevel1_5Color"
    }
  },
  "input.borderWidth": {
    type: "borderWidth",
    value: {
      ref: "basics.borderWidths.S"
    }
  },
  "input.borderBottomColor": {
    type: "color"
  },
  "input.borderBottomWidth": {
    type: "borderWidth",
    value: {
      ref: "basics.borderWidths.S"
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
      ref: "density.fontSizes.M"
    }
  },
  "input.lineHeight": {
    type: "lineHeight",
    value: {
      ref: "basics.lineHeights.M"
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
      ref: "density.spacings.XS"
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
      ref: "basics.borderWidths.L"
    }
  },

  // Focus
  "input.focus.borderBottomColor": {
    type: "color"
  },
  "input.focus.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.L"
    }
  },
  "input.focus.halo.color": {
    type: "color"
  },

  // Active
  "input.active.halo.width": {
    type: "length",
    value: {
      ref: "basics.borderWidths.L"
    }
  },
  "input.active.halo.color": {
    type: "color"
  },

  // Disabled
  "input.disabled.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.surfaceLevel1_5Color"
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
