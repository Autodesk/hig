import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import system from "./system";
import banner from "./components/banner";
import formField from "./components/formField";
import input from "./components/input";
import skeletonItem from "./components/skeletonItem";

const lightGrayThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    banner,
    formField,
    input,
    skeletonItem
  )
);

export default lightGrayThemeConfig;
