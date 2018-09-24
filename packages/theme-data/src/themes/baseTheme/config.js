import mapKeys from "../../utils/mapKeys";
import extendTheme from "../../utils/extendTheme";
import BASICS from "../../basics";
import SYSTEM from "./system";
import checkbox from "./components/checkbox";
import formField from "./components/formField";
import input from "./components/input";
import skeletonItem from "./components/skeletonItem";
import textarea from "./components/textarea";
import label from "./components/label";
import menu from "./components/menu";
import icon from "./components/icon";

const baseThemeConfig = extendTheme(
  {},
  Object.assign(
    {},
    mapKeys(BASICS.BORDER_RADII, key => `basics.borderRadii.${key}`),
    mapKeys(BASICS.BORDER_WIDTHS, key => `basics.borderWidths.${key}`),
    mapKeys(BASICS.COLORS, key => `basics.colors.${key}`),
    mapKeys(BASICS.FONT_FAMILIES, key => `basics.fontFamilies.${key}`),
    mapKeys(BASICS.FONT_SIZES, key => `basics.fontSizes.${key}`),
    mapKeys(BASICS.FONT_WEIGHTS, key => `basics.fontWeights.${key}`),
    mapKeys(BASICS.LINE_HEIGHTS, key => `basics.lineHeights.${key}`),
    mapKeys(BASICS.SHADOWS, key => `basics.shadows.${key}`),
    mapKeys(BASICS.SPACINGS, key => `basics.spacings.${key}`),
    mapKeys(SYSTEM.COLOR_SCHEME, key => `colorScheme.${key}`),
    mapKeys(SYSTEM.DENSITY, key => `density.${key}`),
    checkbox,
    formField,
    input,
    skeletonItem,
    textarea,
    label,
    menu,
    icon
  )
);

export default baseThemeConfig;
