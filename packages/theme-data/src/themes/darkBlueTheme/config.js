import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import { config as abstractThemeConfig } from "../abstractTheme";
import { config as mediumDensityThemeConfig } from "../mediumDensityTheme";
import formField from "./components/formField";
import input from "./components/input";
import label from "./components/label";

const darkBlueThemeConfig = extendTheme(
  abstractThemeConfig,
  Object.assign(
    {},
    mediumDensityThemeConfig,
    mapKeys(system.colorScheme, key => `COLOR_SCHEME.${key}`),
    formField,
    input,
    label
  )
);

export default darkBlueThemeConfig;
