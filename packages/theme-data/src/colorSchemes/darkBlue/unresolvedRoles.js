import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import system from "./system";
import baseTheme from "../../baseTheme";
import mediumDensityTheme from "../../densities/mediumDensity";
import accordion from "./components/accordion";
import avatarBundle from "./components/avatarBundle";
import badge from "./components/badge";
import banner from "./components/banner";
import button from "./components/button";
import checkbox from "./components/checkbox";
import iconButton from "./components/iconButton";
import illustration from "./components/illustration";
import input from "./components/input";
import label from "./components/label";
import progressBar from "./components/progressBar";
import progressRing from "./components/progressRing";
import sideNav from "./components/sideNav";
import skeletonItem from "./components/skeletonItem";
import slider from "./components/slider";
import stepIndicator from "./components/stepIndicator";
import tabs from "./components/tabs";
import tag from "./components/tag";
import textLink from "./components/textLink";
import thumbnail from "./components/thumbnail";
import tile from "./components/tile";
import token from "./components/token";
import tooltip from "./components/tooltip";
import topNav from "./components/topNav";
import treeView from "./components/treeView";

const darkBlueThemeConfig = extendTheme(baseTheme.unresolvedRoles, {
  ...mediumDensityTheme.unresolvedRoles,
  ...mapKeys(system.colorScheme, (key) => `colorScheme.${key}`),
  ...accordion,
  ...avatarBundle,
  ...badge,
  ...banner,
  ...button,
  ...checkbox,
  ...iconButton,
  ...illustration,
  ...input,
  ...label,
  ...progressBar,
  ...progressRing,
  ...sideNav,
  ...skeletonItem,
  ...slider,
  ...stepIndicator,
  ...tabs,
  ...tag,
  ...textLink,
  ...thumbnail,
  ...tile,
  ...token,
  ...tooltip,
  ...topNav,
  ...treeView,
});

export default darkBlueThemeConfig;
