export default {
  "INPUT.HORIZONTAL_PADDING": {
    type: "length",
    value: { ref: "BASICS.SPACINGS.NONE" }
  },
  "INPUT.BOX_TYPE.HORIZONTAL_PADDING": {
    type: "length",
    value: { ref: "DENSITY.SPACINGS.XS" }
  },
  "INPUT.VERTICAL_PADDING": {
    type: "length",
    value: {
      ref: "DENSITY.SPACINGS.XXS"
    }
  },
  "INPUT.BORDER_RADIUS": {
    type: "borderRadius",
    value: {
      ref: "BASICS.BORDER_RADII.S"
    }
  },
  "INPUT.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.SURFACE_LEVEL_1_5_COLOR"
    }
  },
  "INPUT.BORDER_WIDTH": {
    type: "borderWidth",
    value: {
      ref: "BASICS.BORDER_WIDTHS.S"
    }
  },
  "INPUT.BORDER_BOTTOM_COLOR": {
    type: "color"
  },
  "INPUT.BORDER_BOTTOM_WIDTH": {
    type: "borderWidth",
    value: {
      ref: "BASICS.BORDER_WIDTHS.S"
    }
  },
  "INPUT.FONT_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.TEXT_COLOR"
    }
  },
  "INPUT.FONT_WEIGHT": {
    type: "fontWeight",
    value: {
      ref: "BASICS.FONT_WEIGHTS.MEDIUM"
    }
  },
  "INPUT.FONT_FAMILY": {
    type: "fontFamily",
    value: {
      ref: "BASICS.FONT_FAMILIES.MAIN"
    }
  },
  "INPUT.FONT_SIZE": {
    type: "fontSize",
    value: {
      ref: "DENSITY.FONT_SIZES.M"
    }
  },
  "INPUT.LINE_HEIGHT": {
    type: "lineHeight",
    value: {
      ref: "BASICS.LINE_HEIGHTS.M"
    }
  },
  "INPUT.HALO.COLOR": {
    type: "color"
  },
  "INPUT.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "BASICS.BORDER_WIDTHS.NONE"
    }
  },
  "INPUT.GUTTER_WIDTH": {
    type: "length",
    value: {
      ref: "DENSITY.SPACINGS.XS"
    }
  },
  "INPUT.PLACEHOLDER.FONT_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.TEXT_COLOR_DIM"
    }
  },

  // Hover
  "INPUT.HOVER.BORDER_BOTTOM_COLOR": {
    type: "color"
  },
  "INPUT.HOVER.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "BASICS.BORDER_WIDTHS.L"
    }
  },

  // Focus
  "INPUT.FOCUS.BORDER_BOTTOM_COLOR": {
    type: "color"
  },
  "INPUT.FOCUS.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "BASICS.BORDER_WIDTHS.L"
    }
  },
  "INPUT.FOCUS.HALO.COLOR": {
    type: "color"
  },

  // Active
  "INPUT.ACTIVE.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "BASICS.BORDER_WIDTHS.L"
    }
  },
  "INPUT.ACTIVE.HALO.COLOR": {
    type: "color"
  },

  // Disabled
  "INPUT.DISABLED.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.SURFACE_LEVEL_1_5_COLOR"
    }
  },
  "INPUT.DISABLED.FONT_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.TEXT_COLOR"
    },
    transform: {
      alpha: 0.2
    }
  }
};
