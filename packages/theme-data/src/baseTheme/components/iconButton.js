import { BORDER_RADIUS, COLOR, LENGTH } from "../../consts/types";

export default {
  "iconButton.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "iconButton.on.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "iconButton.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "button.borderRadius"
    }
  },
  "iconButton.hover.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.textColor"
    }
  },
  "iconButton.hover.on.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.autodeskBlue700"
    }
  },
  "iconButton.focus.iconColor": {
    type: COLOR,
    value: {
      ref: "iconButton.iconColor"
    }
  },
  "iconButton.focus.on.iconColor": {
    type: COLOR,
    value: {
      ref: "iconButton.on.iconColor"
    }
  },
  "iconButton.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "button.focus.halo.color"
    }
  },
  "iconButton.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "button.focus.halo.width"
    }
  },
  "iconButton.pressed.iconColor": {
    type: COLOR,
    value: {
      ref: "iconButton.hover.iconColor"
    }
  },
  "iconButton.pressed.on.iconColor": {
    type: COLOR,
    value: {
      ref: "iconButton.hover.on.iconColor"
    }
  },
  "iconButton.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.2
    }
  },
  "iconButton.pressed.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "iconButton.pressed.backgroundColor"
    }
  },
  "iconButton.pressed.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.component.backgroundColor"
    },
    transform: {
      alpha: 0.5
    }
  },

  // Static
  "iconButton.static.hover.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.1
    }
  },
  "iconButton.static.hover.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.component.backgroundColor"
    },
    transform: {
      alpha: 0.3
    }
  },
  "iconButton.static.on.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.15
    }
  },
  "iconButton.static.on.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "iconButton.static.on.hover.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },
  "iconButton.static.on.hover.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "iconButton.static.on.hover.level100To250.backgroundColor"
    }
  },
  "iconButton.static.on.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "iconButton.static.on.borderColor"
    }
  },
  "iconButton.static.on.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "iconButton.static.on.borderColor"
    },
    transform: {
      alpha: 1.0
    }
  }
};
