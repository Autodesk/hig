import mapKeys from "../../utils/mapKeys";
import system from "./system";

const lowDensityThemeConfig = Object.assign(
  {},
  mapKeys(system.density, key => `DENSITY.${key}`)
);

export default lowDensityThemeConfig;
