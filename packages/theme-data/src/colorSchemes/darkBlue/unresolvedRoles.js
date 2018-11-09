import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import formField from "./components/formField";
import label from "./components/label";
import skeletonItem from "./components/skeletonItem";
import flyout from "./components/flyout";

const darkBlueThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    formField,
    label,
    skeletonItem,
    flyout
  )
);

export default darkBlueThemeConfig;
