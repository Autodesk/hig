import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import system from "./system";
import formField from "./components/formField";
import skeletonItem from "./components/skeletonItem";

const lightGrayThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    formField,
    skeletonItem
  )
);

export default lightGrayThemeConfig;
