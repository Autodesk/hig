export default {
  /* solid */
  "button.solid.backgroundColor": {
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  },
  "button.solid.hover.backgroundColor": {
    value: {
      ref: "button.solid.backgroundColor"
    }
  },
  "button.solid.hover.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.15
    }
  },
  "button.solid.focus.backgroundColor": {
    value: {
      ref: "button.solid.backgroundColor"
    }
  },
  "button.solid.focus.halo.color": {
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },
  "button.solid.pressed.halo.color": {
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },
  /* outline */
  "button.outline.textColor": {
    value: {
      ref: "colorScheme.textColor"
    }
  },
  "button.outline.icon.color": {
    value: {
      ref: "colorScheme.textColor"
    }
  },
  "button.outline.borderColor": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.35
    }
  },
  "button.outline.hover.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.15
    }
  },
  "button.outline.focus.borderColor": {
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "button.outline.focus.halo.color": {
    value: {
      ref: "button.solid.focus.halo.color"
    }
  },
  "button.outline.pressed.borderColor": {
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "button.outline.pressed.halo.color": {
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },
  /* flat */
  "button.flat.textColor": {
    value: "#6DD2FF"
  },
  "button.flat.icon.color": {
    value: "#6DD2FF"
  },
  "button.flat.hover.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0.15
    }
  },
  "button.flat.focus.halo.color": {
    value: {
      ref: "button.solid.focus.halo.color"
    }
  },
  "button.flat.pressed.halo.color": {
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  }
};
