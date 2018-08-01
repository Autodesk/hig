import mapKeys from "../../utils/mapKeys";
import system from "./system";

const highDensityThemeConfig = Object.assign(
  {},
  mapKeys(system.density, key => `DENSITY.${key}`)
);

export default highDensityThemeConfig;
