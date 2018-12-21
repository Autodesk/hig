import mapKeys from "../../utils/mapKeys";
import system from "./system";
import button from "./components/button";

const highDensityThemeConfig = Object.assign(
  { ...button },
  mapKeys(system.density, key => `density.${key}`)
);

export default highDensityThemeConfig;
