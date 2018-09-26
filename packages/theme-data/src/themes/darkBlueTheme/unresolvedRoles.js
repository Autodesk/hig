import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import baseTheme from "../baseTheme";
import mediumDensityTheme from "../mediumDensityTheme";
import formField from "./components/formField";
import input from "./components/input";
import label from "./components/label";
import skeletonItem from "./components/skeletonItem";

const darkBlueThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    formField,
    input,
    label,
    skeletonItem
  )
);

export default darkBlueThemeConfig;
