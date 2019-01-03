import extendTheme from "../../utils/extendTheme";
import lightGrayTheme from "../lightGray";

const oldBasics = {
  colors: {
    "hig-turquoise-40": "#5CE1D3",
    "hig-turquoise-50": "#0ED3BE",
    "hig-cool-gray-10": "#ECF0F3",
    "hig-cool-gray-20": "#D4DBE1",
    "hig-cool-gray-30": "#BEC8D2",
    "hig-blue-20": "#CCEAF9",
    "hig-blue-40": "#66BFE9",
    "hig-blue-60": "#0671A1",
    "hig-slate-40": "#7993B0",
    "hig-indigo-30": "#D1DDEE"
  }
};

const webLightThemeResolvedRoles = extendTheme(lightGrayTheme.unresolvedRoles, {
  "basics.fontWeights.bold": {
    value: "700"
  },
  "button.borderRadius": {
    value: {
      ref: "basics.borderRadii.large"
    }
  },
  "button.fontWeight": {
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "button.halo.width": {
    value: 0
  },
  "button.flat.icon.color": {
    value: {
      ref: "basics.colors.black"
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
  "button.flat.focus.icon.color": {
    value: {
      ref: "basics.colors.white"
    }
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
  "button.outline.icon.color": {
    value: {
      ref: "basics.colors.black"
    }
  },
  "button.outline.textColor": {
    value: {
      ref: "basics.colors.black"
    }
  },
  "button.outline.borderColor": {
    value: oldBasics.colors["hig-cool-gray-30"],
    transform: {
      alpha: 1.0
    }
  },
  "button.outline.focus.backgroundColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.outline.focus.borderColor": {
    value: oldBasics.colors["hig-turquoise-40"]
  },
  "button.outline.focus.icon.color": {
    value: {
      ref: "basics.colors.white"
    }
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
  "checkbox.borderRadius": {
    value: "3px"
  },
  "checkbox.borderColor": {
    value: oldBasics.colors["hig-cool-gray-30"]
  },
  "checkbox.checked.backgroundColor": {
    value: oldBasics.colors["hig-slate-40"]
  },
  "checkbox.checked.borderColor": {
    value: oldBasics.colors["hig-slate-40"]
  },
  "checkbox.focus.checked.backgroundColor": {
    value: oldBasics.colors["hig-blue-60"]
  },
  "checkbox.focus.checked.borderColor": {
    value: oldBasics.colors["hig-blue-60"]
  },
  "checkbox.focus.indeterminate.borderColor": {
    value: oldBasics.colors["hig-blue-60"]
  },
  "checkbox.focus.borderColor": {
    value: oldBasics.colors["hig-blue-60"],
    transform: {
      alpha: 1
    }
  },
  "checkbox.focus.halo.width": {
    value: 0
  },
  "checkbox.hover.halo.width": {
    value: 0
  },
  "checkbox.indeterminate.backgroundColor": {
    value: oldBasics.colors["hig-slate-40"]
  },
  "checkbox.indeterminate.borderColor": {
    value: oldBasics.colors["hig-slate-40"]
  },
  "checkbox.pressed.halo.width": {
    value: 0
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
  },
  "progressBar.backgroundColor": {
    value: oldBasics.colors["hig-cool-gray-10"],
    transform: {
      alpha: "1.0"
    }
  },
  "progressBar.highlightColor": {
    value: oldBasics.colors["hig-turquoise-50"]
  }
});

export default webLightThemeResolvedRoles;
