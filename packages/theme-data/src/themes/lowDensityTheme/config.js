import mapKeys from "../../utils/mapKeys";
import system from "./system";

const lowDensityThemeConfig = Object.assign(
  {},
  mapKeys(system.density, key => `density.${key}`)
);

export default lowDensityThemeConfig;
