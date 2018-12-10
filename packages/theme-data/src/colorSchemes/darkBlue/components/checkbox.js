export default {
  "checkbox.borderColor": {
    value: {
      ref: "basics.colors.white"
    }
  },
  "checkbox.iconColor": {
    value: {
      ref: "colorScheme.surfaceLevel200Color"
    }
  },

  // Focus
  "checkbox.focus.borderColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 1
    }
  },
  "checkbox.focus.halo.color": {
    value: {
      ref: "basics.colors.autodeskBlue400"
    }
  },

  // Hover
  "checkbox.hover.borderColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 1
    }
  },
  "checkbox.hover.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.4
    }
  },

  // Pressed
  "checkbox.pressed.halo.color": {
    value: {
      ref: "basics.colors.autodeskBlue400"
    }
  },

  // Disabled
  "checkbox.disabled.borderColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.5
    }
  },

  // Checked
  "checkbox.checked.backgroundColor": {
    value: {
      ref: "basics.colors.white"
    }
  },

  // Indeterminate
  "checkbox.indeterminate.backgroundColor": {
    value: {
      ref: "basics.colors.white"
    }
  },

  // Disabled + Chekced
  "checkbox.disabled.checked.backgroundColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.disabled.checked.borderColor": {
    value: {
      ref: "basics.colors.white"
    },
    // need alpha of 0 to match background color
    transform: {
      alpha: 0
    }
  },

  // Disabled + Indeterminate
  "checkbox.disabled.indeterminate.backgroundColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.disabled.indeterminate.borderColor": {
    value: {
      ref: "basics.colors.white"
    },
    // need alpha of 0 to match background color
    transform: {
      alpha: 0
    }
  }
};
