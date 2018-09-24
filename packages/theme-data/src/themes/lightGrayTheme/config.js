import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import { config as baseThemeConfig } from "../baseTheme";
import { config as mediumDensityThemeConfig } from "../mediumDensityTheme";
import system from "./system";
import formField from "./components/formField";
import input from "./components/input";
import label from "./components/label";
import skeletonItem from "./components/skeletonItem";

const lightGrayConfig = extendTheme(
  baseThemeConfig,
  Object.assign(
    {},
    mediumDensityThemeConfig,
    mapKeys(system.colorScheme, key => `COLOR_SCHEME.${key}`),
    formField,
    input,
    label,
    skeletonItem
  )
);

export default lightGrayConfig;
