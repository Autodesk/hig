import mapKeys from "../../utils/mapKeys";
import system from "./system";
import button from "./components/button";
import modal from "./components/modal";
import treeView from "./components/treeView";
import typography from "./components/typography";

const mediumDensityThemeConfig = Object.assign(
  { ...button },
  modal,
  treeView,
  typography,
  mapKeys(system.density, key => `density.${key}`)
);

export default mediumDensityThemeConfig;
