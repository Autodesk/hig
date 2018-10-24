import extendTheme from "../../utils/extendTheme";
import lightGrayTheme from "../lightGrayTheme";

const oldBasics = {
  colors: {
    "hig-turquoise-50": "#0ED3BE"
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
  }
});

export default webLightThemeResolvedRoles;
