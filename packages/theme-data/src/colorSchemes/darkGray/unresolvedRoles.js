import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import darkBlueTheme from "../darkBlue";
import system from "./system";

const darkGrayThemeConfig = extendTheme(
  darkBlueTheme.unresolvedRoles,
  Object.assign({}, mapKeys(system.colorScheme, key => `colorScheme.${key}`))
);

export default darkGrayThemeConfig;
