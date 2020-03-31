import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import accordion from "./components/accordion";
import avatarBundle from "./components/avatarBundle";
import banner from "./components/banner";
import button from "./components/button";
import checkbox from "./components/checkbox";
import formField from "./components/formField";
import iconButton from "./components/iconButton";
import input from "./components/input";
import label from "./components/label";
import progressBar from "./components/progressBar";
import progressRing from "./components/progressRing";
import segmentedButton from "./components/segmentedButton";
import skeletonItem from "./components/skeletonItem";
import slider from "./components/slider";
import stepIndicator from "./components/stepIndicator";
import tabs from "./components/tabs";
import tag from "./components/tag";
import textLink from "./components/textLink";
import thumbnail from "./components/thumbnail";
import tooltip from "./components/tooltip";
import topNav from "./components/topNav";
import treeView from "./components/treeView";

const darkBlueThemeConfig = extendTheme(
  baseTheme.unresolvedRoles,
  Object.assign(
    {},
    mediumDensityTheme.unresolvedRoles,
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    accordion,
    avatarBundle,
    banner,
    button,
    checkbox,
    formField,
    iconButton,
    input,
    label,
    progressBar,
    progressRing,
    segmentedButton,
    skeletonItem,
    slider,
    stepIndicator,
    tabs,
    tag,
    textLink,
    thumbnail,
    tooltip,
    topNav,
    treeView
  )
);

export default darkBlueThemeConfig;
