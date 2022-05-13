import mapKeys from "../../utils/mapKeys";
import system from "./system";

const mediumDensityThemeConfig = Object.assign(
  mapKeys(system.density, (key) => `density.${key}`)
);

export default mediumDensityThemeConfig;
