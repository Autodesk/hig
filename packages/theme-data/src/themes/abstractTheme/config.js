import mapKeys from "../../utils/mapKeys";
import extendTheme from "../../utils/extendTheme";
import BASICS from "../../basics";
import SYSTEM from "./system";
import checkbox from "./components/checkbox";
import input from "./components/input";
import label from "./components/label";
import menu from "./components/menu";

const abstractThemeConfig = extendTheme(
  {},
  Object.assign(
    {},
    mapKeys(BASICS.BORDER_RADII, key => `BASICS.BORDER_RADII.${key}`),
    mapKeys(BASICS.BORDER_WIDTHS, key => `BASICS.BORDER_WIDTHS.${key}`),
    mapKeys(BASICS.BREAKPOINTS, key => `BASICS.BREAKPOINTS.${key}`),
    mapKeys(BASICS.COLORS, key => `BASICS.COLORS.${key}`),
    mapKeys(BASICS.FONT_FAMILIES, key => `BASICS.FONT_FAMILIES.${key}`),
    mapKeys(BASICS.FONT_SIZES, key => `BASICS.FONT_SIZES.${key}`),
    mapKeys(BASICS.FONT_WEIGHTS, key => `BASICS.FONT_WEIGHTS.${key}`),
    mapKeys(BASICS.LINE_HEIGHTS, key => `BASICS.LINE_HEIGHTS.${key}`),
    mapKeys(BASICS.SHADOWS, key => `BASICS.SHADOWS.${key}`),
    mapKeys(BASICS.SPACINGS, key => `BASICS.SPACINGS.${key}`),
    mapKeys(SYSTEM.COLOR_SCHEME, key => `COLOR_SCHEME.${key}`),
    mapKeys(SYSTEM.DENSITY, key => `DENSITY.${key}`),
    checkbox,
    input,
    label,
    menu
  )
);

export default abstractThemeConfig;
