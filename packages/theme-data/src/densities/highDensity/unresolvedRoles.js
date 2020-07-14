import mapKeys from "../../utils/mapKeys";
import system from "./system";
import button from "./components/button";
import checkbox from "./components/checkbox";
import input from "./components/input";
import modal from "./components/modal";
import panel from "./components/panel";
import slider from "./components/slider";
import tabs from "./components/tabs";
import toggle from "./components/toggle";
import treeView from "./components/treeView";
import typography from "./components/typography";

const highDensityThemeConfig = Object.assign(
  { ...button },
  checkbox,
  input,
  modal,
  panel,
  slider,
  tabs,
  toggle,
  treeView,
  typography,
  mapKeys(system.density, key => `density.${key}`)
);

export default highDensityThemeConfig;
