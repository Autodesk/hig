import mapKeys from "../utils/mapKeys";
import extendTheme from "../utils/extendTheme";
import basics from "../basics";
import system from "./system";

import accordion from "./components/accordion";
import avatar from "./components/avatar";
import banner from "./components/banner";
import button from "./components/button";
import checkbox from "./components/checkbox";
import component from "./components/component";
import divider from "./components/divider";
import flyout from "./components/flyout";
import formField from "./components/formField";
import iconButton from "./components/iconButton";
import input from "./components/input";
import label from "./components/label";
import menu from "./components/menu";
import modal from "./components/modal";
import progressBar from "./components/progressBar";
import progressRing from "./components/progressRing";
import skeletonItem from "./components/skeletonItem";
import slider from "./components/slider";
import stepIndicator from "./components/stepIndicator";
import tabs from "./components/tabs";
import tag from "./components/tag";
import textarea from "./components/textarea";
import textLink from "./components/textLink";
import thumbnail from "./components/thumbnail";
import tile from "./components/tile";
import timestamp from "./components/timestamp";
import toggle from "./components/toggle";
import token from "./components/token";
import tooltip from "./components/tooltip";
import topNav from "./components/topNav";
import treeView from "./components/treeView";
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
    accordion,
    avatar,
    banner,
    button,
    checkbox,
    component,
    divider,
    flyout,
    formField,
    iconButton,
    input,
    label,
    menu,
    modal,
    progressBar,
    progressRing,
    skeletonItem,
    slider,
    stepIndicator,
    tabs,
    tag,
    textarea,
    textLink,
    tile,
    timestamp,
    thumbnail,
    toggle,
    token,
    tooltip,
    topNav,
    treeView,
    typography
  )
);

export default baseThemeConfig;
