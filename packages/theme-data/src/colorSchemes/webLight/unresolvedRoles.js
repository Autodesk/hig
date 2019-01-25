import extendTheme from "../../utils/extendTheme";
import lightGrayTheme from "../lightGray";
import button from "./components/button";
import checkbox from "./components/checkbox";
import flyout from "./components/flyout";
import input from "./components/input";
import label from "./components/label";
import progressBar from "./components/progressBar";
import progressRing from "./components/progressRing";
import textLink from "./components/textLink";
import tooltip from "./components/tooltip";

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
    label,
    progressBar,
    progressRing,
    textLink,
    tooltip
  )
);

export default webLightThemeConfig;
