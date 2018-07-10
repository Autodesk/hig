import extendTheme from "../../utils/extendTheme";
import { config as lightGrayThemeConfig } from "../lightGrayTheme";

const oldBasics = {
  colors: {
    "hig-turquoise-50": "#0ED3BE"
  }
};

const webLightThemeConfig = extendTheme(lightGrayThemeConfig, {
  "INPUT.HOVER.BORDER_BOTTOM_COLOR": oldBasics.colors["hig-turquoise-50"],
  "INPUT.HOVER.HALO.WIDTH": { ref: "BASICS.BORDER_WIDTHS.S" },
  "INPUT.HALO.COLOR": oldBasics.colors["hig-turquoise-50"],
  "INPUT.FOCUS.HALO.WIDTH": { ref: "BASICS.BORDER_WIDTHS.S" },
  "INPUT.FOCUS.HALO.COLOR": { ref: "COLOR_SCHEME.ACCENT_COLOR_500" },
  "INPUT.ACTIVE.HALO.WIDTH": { ref: "BASICS.BORDER_WIDTHS.S" },
  "INPUT.ACTIVE.HALO.COLOR": { ref: "COLOR_SCHEME.ACCENT_COLOR_500" }
});

export default webLightThemeConfig;
