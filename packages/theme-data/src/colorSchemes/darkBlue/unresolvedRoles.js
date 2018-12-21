import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import button from "./components/button";
import checkbox from "./components/checkbox";
import formField from "./components/formField";
import label from "./components/label";
import skeletonItem from "./components/skeletonItem";

const darkBlueThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    button,
    checkbox,
    formField,
    label,
    skeletonItem
  )
);

export default darkBlueThemeConfig;
