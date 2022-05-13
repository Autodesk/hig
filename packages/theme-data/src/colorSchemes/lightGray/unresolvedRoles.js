import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import system from "./system";

const lightGrayThemeConfig = extendTheme(baseTheme.unresolvedRoles, {
  ...mediumDensityTheme.unresolvedRoles,
  ...mapKeys(system.colorScheme, (key) => `colorScheme.${key}`),
});

export default lightGrayThemeConfig;
