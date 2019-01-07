import mapKeys from "../../utils/mapKeys";
import system from "./system";
import button from "./components/button";
import typography from "./components/typography";

const mediumDensityThemeConfig = Object.assign(
  { ...button },
  typography,
  mapKeys(system.density, key => `density.${key}`)
);

export default mediumDensityThemeConfig;
