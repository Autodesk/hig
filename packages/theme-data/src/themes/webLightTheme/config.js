import extendTheme from "../../utils/extendTheme";
import { config as lightGrayThemeConfig } from "../lightGrayTheme";

const oldBasics = {
  colors: {
    "hig-turquoise-50": "#0ED3BE"
  }
};

const webLightThemeConfig = extendTheme(lightGrayThemeConfig, {
  "input.hover.borderBottomColor": {
    value: oldBasics.colors["hig-turquoise-50"]
  },
  "input.hover.halo.width": {
    value: {
      ref: "basics.borderWidths.s"
    }
  },
  "input.halo.color": {
    value: oldBasics.colors["hig-turquoise-50"]
  },
  "input.focus.halo.width": {
    value: {
      ref: "basics.borderWidths.s"
    }
  },
  "input.focus.halo.color": {
    value: {
      ref: "colorScheme.accentColor500"
    }
  },
  "input.active.halo.width": {
    value: {
      ref: "basics.borderWidths.s"
    }
  },
  "input.active.halo.color": {
    value: {
      ref: "colorScheme.accentColor500"
    }
  }
});

export default webLightThemeConfig;
