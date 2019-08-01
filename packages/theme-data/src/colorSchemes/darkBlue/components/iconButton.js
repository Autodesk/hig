export default {
  "iconButton.iconColor": {
    value: "#a2a6b0"
  },
  "iconButton.hover.iconColor": {
    value: "#d0d2d7"
  },
  "iconButton.hover.on.iconColor": {
    value: {
      ref: "basics.colors.autodeskBlue300"
    }
  },
  "iconButton.focus.halo.color": {
    transform: {
      alpha: 0.35
    }
  },
  "iconButton.pressed.backgroundColor": {
    value: {
      ref: "colorScheme.surfaceLevel300Color"
    },
    transform: {
      alpha: 0.7
    }
  },
  "iconButton.pressed.level300To350.backgroundColor": {
    value: {
      ref: "basics.colors.darkBlue200"
    },
    transform: {
      alpha: 0.2
    }
  },
  // Static
  "iconButton.static.hover.level100To250.backgroundColor": {
    value: {
      ref: "iconButton.pressed.backgroundColor"
    },
    transform: {
      alpha: 0.3
    }
  },
  "iconButton.static.hover.level300To350.backgroundColor": {
    value: {
      ref: "iconButton.pressed.level300To350.backgroundColor"
    },
    transform: {
      alpha: 0.1
    }
  },
  "iconButton.static.on.backgroundColor": {
    transform: {
      alpha: 0.25
    }
  },
  "iconButton.static.on.borderColor": {
    transform: {
      alpha: 0.6
    }
  },
  "iconButton.static.on.hover.level100To250.backgroundColor": {
    transform: {
      alpha: 0.45
    }
  },
  "iconButton.static.on.focus.borderColor": {
    value: {
      ref: "basics.colors.autodeskBlue500"
    }
  }
};
