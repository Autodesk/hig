import mapKeys from "../../utils/mapKeys";
import system from "./system";
import button from "./components/button";
import checkbox from "./components/checkbox";

const highDensityThemeConfig = Object.assign(
  { ...button },
  checkbox,
  mapKeys(system.density, key => `density.${key}`) 
);

export default highDensityThemeConfig;
