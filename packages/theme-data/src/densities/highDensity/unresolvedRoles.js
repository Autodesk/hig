import mapKeys from "../../utils/mapKeys";
import system from "./system";

const highDensityThemeConfig = Object.assign(
  {},
  mapKeys(system.density, key => `density.${key}`)
);

export default highDensityThemeConfig;
