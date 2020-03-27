import mapKeys from "../../utils/mapKeys";
import system from "./system";
import typography from "./components/typography";

const mediumDensityThemeConfig = Object.assign(
  typography,
  mapKeys(system.density, key => `density.${key}`)
);

export default mediumDensityThemeConfig;
