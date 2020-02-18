import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import banner from "./components/banner";
import button from "./components/button";
import checkbox from "./components/checkbox";
import divider from "./components/divider";
import formField from "./components/formField";
import iconButton from "./components/iconButton";
import input from "./components/input";
import label from "./components/label";
import menu from "./components/menu";
import progressBar from "./components/progressBar";
import progressRing from "./components/progressRing";
import skeletonItem from "./components/skeletonItem";
import slider from "./components/slider";
import textLink from "./components/textLink";
import thumbnail from "./components/thumbnail";
import token from "./components/token";
import tooltip from "./components/tooltip";
import topNav from "./components/topNav";
import treeView from "./components/treeView";

const darkBlueThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    banner,
    button,
    checkbox,
    divider,
    formField,
    iconButton,
    input,
    label,
    menu,
    progressBar,
    progressRing,
    skeletonItem,
    slider,
    textLink,
    thumbnail,
    token,
    tooltip,
    topNav,
    treeView
  )
);

export default darkBlueThemeConfig;
