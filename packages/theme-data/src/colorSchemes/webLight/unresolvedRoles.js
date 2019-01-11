import extendTheme from "../../utils/extendTheme";
import lightGrayTheme from "../lightGray";
import button from "./components/button";
import checkbox from "./components/checkbox";
import flyout from "./components/flyout";
import input from "./components/input";
import progressBar from "./components/progressBar";

const webLightThemeConfig = extendTheme(
  lightGrayTheme.unresolvedRoles,
  Object.assign(
    {},
    {
      "basics.fontWeights.bold": {
        value: "700"
      }
    },
    button,
    checkbox,
    flyout,
    input,
    progressBar
  )
);

export default webLightThemeConfig;
