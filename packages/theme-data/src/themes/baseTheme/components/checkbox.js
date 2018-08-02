export default {
  "CHECKBOX.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.COMPONENT.BACKGROUND_COLOR"
    }
  },
  "CHECKBOX.BORDER_COLOR": {
    type: "color",
    transform: {
      alpha: 0.5
    },
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    }
  },
  "CHECKBOX.BORDER_WIDTH": {
    type: "borderWidth",
    value: {
      ref: "INPUT.BORDER_BOTTOM_WIDTH"
    }
  },
  "CHECKBOX.BORDER_RADIUS": {
    type: "borderRadius",
    value: {
      ref: "BASICS.BORDER_RADII.S"
    }
  },
  "CHECKBOX.HALO.COLOR": {
    type: "color",
    value: {
      ref: "INPUT.HALO.COLOR"
    }
  },
  "CHECKBOX.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "INPUT.HALO.WIDTH"
    }
  },
  "CHECKBOX.LABEL_SPACING": {
    type: "length",
    value: {
      ref: "DENSITY.SPACINGS.S"
    }
  },

  // Hover
  "CHECKBOX.HOVER.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    },
    transform: {
      alpha: 0.5
    }
  },
  "CHECKBOX.HOVER.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "INPUT.HOVER.HALO.WIDTH"
    }
  },
  "CHECKBOX.HOVER.HALO.COLOR": {
    type: "color",
    value: {
      ref: "INPUT.HALO.COLOR"
    }
  },

  // Focus
  "CHECKBOX.FOCUS.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    },
    transform: {
      alpha: 0.5
    }
  },
  "CHECKBOX.FOCUS.HALO.COLOR": {
    type: "color",
    value: {
      ref: "INPUT.FOCUS.HALO.COLOR"
    }
  },
  "CHECKBOX.FOCUS.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "INPUT.FOCUS.HALO.WIDTH"
    }
  },

  // Active
  "CHECKBOX.ACTIVE.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    },
    transform: {
      alpha: 0.5
    }
  },
  "CHECKBOX.ACTIVE.HALO.COLOR": {
    type: "color",
    value: {
      ref: "INPUT.ACTIVE.HALO.COLOR"
    }
  },
  "CHECKBOX.ACTIVE.HALO.WIDTH": {
    type: "length",
    value: {
      ref: "INPUT.ACTIVE.HALO.WIDTH"
    }
  },

  // Checked
  "CHECKBOX.CHECKED.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    }
  },
  "CHECKBOX.CHECKED.ICON_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.WHITE"
    }
  },
  "CHECKBOX.CHECKED.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    }
  },

  // Disabled
  "CHECKBOX.DISABLED.BORDER_COLOR": {
    type: "color",
    value: {
      ref: "INPUT.DISABLED.BORDER_COLOR"
    }
  },

  // Disabled + Checked
  "CHECKBOX.DISABLED.CHECKED.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    },
    transform: {
      alhpa: 0.5
    }
  }
};
