import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import darkBlueTheme from "../darkBlue";
import system from "./system";
import accordion from "./components/accordion";
import avatarBundle from "./components/avatarBundle";
import button from "./components/button";
import checkbox from "./components/checkbox";
import input from "./components/input";
import segmentedButton from "./components/segmentedButton";
import slider from "./components/slider";
import tag from "./components/tag";
import thumbnail from "./components/thumbnail";
import toggle from "./components/toggle";
import token from "./components/token";
import tooltip from "./components/tooltip";

const darkGrayThemeConfig = extendTheme(
  darkBlueTheme.unresolvedRoles,
  Object.assign(
    {},
    mapKeys(system.colorScheme, key => `colorScheme.${key}`),
    accordion,
    avatarBundle,
    button,
    checkbox,
    input,
    segmentedButton,
    slider,
    tag,
    thumbnail,
    toggle,
    token,
    tooltip
  )
);

export default darkGrayThemeConfig;
