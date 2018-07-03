import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import abstractThemeConfig from "../abstractThemeConfig";
import system from "./system";
import { config as mediumDensityThemeConfig } from "../mediumDensityThemeConfig";
import input from "./components/input";
import label from "./components/label";

const lightGrayThemeConfig = extendTheme(
  abstractThemeConfig,
  Object.assign(
    {},
    mediumDensityThemeConfig,
    mapKeys(system.colorScheme, key => `COLOR_SCHEME.${key}`),
    input,
    label
  )
);

export default lightGrayThemeConfig;
