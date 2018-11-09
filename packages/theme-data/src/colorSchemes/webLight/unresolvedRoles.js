import extendTheme from "../../utils/extendTheme";
import lightGrayTheme from "../lightGray";

const oldBasics = {
  colors: {
    "hig-turquoise-50": "#0ED3BE",
    "hig-cool-gray-20": "#D4DBE1"
  }
};

const webLightThemeResolvedRoles = extendTheme(lightGrayTheme.unresolvedRoles, {
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
