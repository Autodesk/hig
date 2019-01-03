import mapKeys from "../utils/mapKeys";
import extendTheme from "../utils/extendTheme";
import basics from "../basics";
import system from "./system";

import avatar from "./components/avatar";
import button from "./components/button";
import checkbox from "./components/checkbox";
import component from "./components/component";
import formField from "./components/formField";
import flyout from "./components/flyout";
import input from "./components/input";
import label from "./components/label";
import menu from "./components/menu";
import progressBar from "./components/progressBar";
import skeletonItem from "./components/skeletonItem";
import textarea from "./components/textarea";
import typography from "./components/typography";

const baseThemeConfig = extendTheme(
  {},
  Object.assign(
    {},
    mapKeys(basics.borderRadii, key => `basics.borderRadii.${key}`),
    mapKeys(basics.borderWidths, key => `basics.borderWidths.${key}`),
    mapKeys(basics.colors, key => `basics.colors.${key}`),
    mapKeys(basics.fontFamilies, key => `basics.fontFamilies.${key}`),
    mapKeys(basics.fontSizes, key => `basics.fontSizes.${key}`),
    mapKeys(basics.fontWeights, key => `basics.fontWeights.${key}`),
    mapKeys(basics.lineHeights, key => `basics.lineHeights.${key}`),
    mapKeys(basics.shadows, key => `basics.shadows.${key}`),
    mapKeys(basics.spacings, key => `basics.spacings.${key}`),
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    mapKeys(system.density, key => `density.${key}`),
    avatar,
    button,
    checkbox,
    component,
    formField,
    flyout,
    input,
    label,
    menu,
    progressBar,
    skeletonItem,
    textarea,
    typography
  )
);

export default baseThemeConfig;
