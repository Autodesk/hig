import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import darkBlueTheme from "../darkBlue";
import system from "./system";
import accordion from "./components/accordion";
import avatarBundle from "./components/avatarBundle";
import divider from "./components/divider";
import input from "./components/input";
import segmentedButton from "./components/segmentedButton";
import slider from "./components/slider";
import tag from "./components/tag";
import thumbnail from "./components/thumbnail";
import toggle from "./components/toggle";
import tooltip from "./components/tooltip";

const darkGrayThemeConfig = extendTheme(
  darkBlueTheme.unresolvedRoles,
  Object.assign(
    {},
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    accordion,
    avatarBundle,
    divider,
    input,
    segmentedButton,
    slider,
    tag,
    thumbnail,
    toggle,
    tooltip
  )
);

export default darkGrayThemeConfig;
