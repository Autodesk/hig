import mapKeys from "../../utils/mapKeys";
import system from "./system";
import button from "./components/button";
import checkbox from "./components/checkbox";
import input from "./components/input";

const highDensityThemeConfig = Object.assign(
  { ...button },
  checkbox,
  input,
  mapKeys(system.density, key => `density.${key}`)
);

export default highDensityThemeConfig;
