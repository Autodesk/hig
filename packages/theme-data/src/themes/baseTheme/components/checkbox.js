export default {
  "checkbox.backgroundColor": {
    type: "color",
    value: {
      ref: "colorScheme.component.backgroundColor"
    }
  },
  "checkbox.borderColor": {
    type: "color",
    transform: {
      alpha: 0.5
    },
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "checkbox.borderWidth": {
    type: "borderWidth",
    value: {
      ref: "input.borderBottomWidth"
    }
  },
  "checkbox.borderRadius": {
    type: "borderRadius",
    value: {
      ref: "basics.borderRadii.small"
    }
  },
  "checkbox.halo.color": {
    type: "color",
    value: {
      ref: "input.halo.color"
    }
  },
  "checkbox.halo.width": {
    type: "length",
    value: {
      ref: "input.halo.width"
    }
  },
  "checkbox.labelSpacing": {
    type: "length",
    value: {
      ref: "density.spacings.small"
    }
  },

  // Hover
  "checkbox.hover.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.hover.halo.width": {
    type: "length",
    value: {
      ref: "input.hover.halo.width"
    }
  },
  "checkbox.hover.halo.color": {
    type: "color",
    value: {
      ref: "input.halo.color"
    }
  },

  // Focus
  "checkbox.focus.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.focus.halo.color": {
    type: "color",
    value: {
      ref: "input.focus.halo.color"
    }
  },
  "checkbox.focus.halo.width": {
    type: "length",
    value: {
      ref: "input.focus.halo.width"
    }
  },

  // Active
  "checkbox.active.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.active.halo.color": {
    type: "color",
    value: {
      ref: "input.active.halo.color"
    }
  },
  "checkbox.active.halo.width": {
    type: "length",
    value: {
      ref: "input.active.halo.width"
    }
  },

  // Checked
  "checkbox.checked.borderColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "checkbox.checked.iconColor": {
    type: "color",
    value: {
      ref: "basics.colors.white"
    }
  },
  "checkbox.checked.backgroundColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    }
  },

  // Disabled
  "checkbox.disabled.borderColor": {
    type: "color",
    value: {
      ref: "input.disabled.borderColor"
    }
  },

  // Disabled + Checked
  "checkbox.disabled.checked.backgroundColor": {
    type: "color",
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alhpa: 0.5
    }
  }
};
