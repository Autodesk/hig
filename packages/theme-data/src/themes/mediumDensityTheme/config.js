import mapKeys from "../../utils/mapKeys";
import system from "./system";

const mediumDensityThemeConfig = Object.assign(
  {},
  mapKeys(system.density, key => `DENSITY.${key}`)
);

export default mediumDensityThemeConfig;
