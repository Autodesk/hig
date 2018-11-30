import extendTheme from "../../utils/extendTheme";
import lightGrayTheme from "../lightGray";

const oldBasics = {
  colors: {
    "hig-turquoise-40": "#5CE1D3",
    "hig-turquoise-50": "#0ED3BE",
    "hig-cool-gray-20": "#D4DBE1",
    "hig-cool-gray-30": "#BEC8D2",
    "hig-blue-20": "#CCEAF9",
    "hig-blue-40": "#66BFE9",
    "hig-blue-60": "#0671A1"
  }
};

const webLightThemeResolvedRoles = extendTheme(lightGrayTheme.unresolvedRoles, {
  "button.fontWeight": {
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "button.halo.width": {
    value: 0
  },
  "button.flat.disabled.textColor": {
    value: oldBasics.colors["hig-cool-gray-30"],
    transform: {
      alpha: 1
    }
  },
  "button.flat.textColor": {
    value: {
      ref: "basics.colors.black"
    }
  },
  "button.flat.focus.backgroundColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.flat.focus.borderColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.flat.focus.textColor": {
    value: {
      ref: "basics.colors.white"
    }
  },
  "button.flat.hover.borderColor": {
    value: oldBasics.colors["hig-turquoise-50"]
  },
  "button.flat.pressed.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0
    }
  },
  "button.outline.textColor": {
    value: {
      ref: "basics.colors.black"
    }
  },
  "button.outline.borderColor": {
    value: oldBasics.colors["hig-cool-gray-30"]
  },
  "button.outline.disabled.borderColor": {
    value: oldBasics.colors["hig-cool-gray-20"],
    transform: {
      alpha: 1
    }
  },
  "button.outline.disabled.textColor": {
    value: oldBasics.colors["hig-cool-gray-30"],
    transform: {
      alpha: 1
    }
  },
  "button.outline.focus.backgroundColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.outline.focus.borderColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.outline.focus.textColor": {
    value: {
      ref: "basics.colors.white"
    }
  },
  "button.outline.pressed.borderColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.outline.pressed.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0
    }
  },
  "button.outline.hover.borderColor": {
    value: oldBasics.colors["hig-turquoise-50"]
  },
  "button.solid.textColor": {
    value: {
      ref: "basics.colors.white"
    }
  },
  "button.solid.disabled.backgroundColor": {
    value: oldBasics.colors["hig-blue-20"],
    transform: {
      alpha: 1
    }
  },
  "button.solid.disabled.textColor": {
    value: {
      ref: "basics.colors.white"
    }
  },
  "button.solid.focus.backgroundColor": {
    value: oldBasics.colors["hig-blue-60"]
  },
  "button.solid.focus.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0
    }
  },
  "button.solid.hover.backgroundColor": {
    value: oldBasics.colors["hig-blue-40"]
  },
  "button.solid.hover.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0
    }
  },
  "button.solid.pressed.halo.color": {
    value: {
      ref: "basics.colors.white"
    },
    transform: {
      alpha: 0
    }
  },
  "input.hover.borderBottomColor": {
    value: oldBasics.colors["hig-turquoise-50"]
  },
  "input.hover.halo.width": {
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.halo.color": {
    value: oldBasics.colors["hig-turquoise-50"]
  },
  "input.focus.halo.width": {
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.focus.halo.color": {
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "input.active.halo.width": {
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "input.active.halo.color": {
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "flyout.borderColor": {
    value: oldBasics.colors["hig-cool-gray-20"]
  }
});

export default webLightThemeResolvedRoles;
