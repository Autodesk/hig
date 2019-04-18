import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import darkBlueTheme from "../darkBlue";
import system from "./system";
import divider from "./components/divider";
import iconButton from "./components/iconButton";
import input from "./components/input";
import slider from "./components/slider";
import tooltip from "./components/tooltip";

const darkGrayThemeConfig = extendTheme(
  darkBlueTheme.unresolvedRoles,
  Object.assign(
    {},
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    divider,
    iconButton,
    input,
    slider,
    tooltip
  )
);

export default darkGrayThemeConfig;
