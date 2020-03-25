import mapKeys from "../../utils/mapKeys";
import system from "./system";
import modal from "./components/modal";
import typography from "./components/typography";

const mediumDensityThemeConfig = Object.assign(
  modal,
  typography,
  mapKeys(system.density, key => `density.${key}`)
);

export default mediumDensityThemeConfig;
