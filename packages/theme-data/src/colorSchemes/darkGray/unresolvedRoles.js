import extendTheme from "../../utils/extendTheme";
import mapKeys from "../../utils/mapKeys";
import darkBlueTheme from "../darkBlue";
import system from "./system";
import accordion from "./components/accordion";
import avatarBundle from "./components/avatarBundle";
import button from "./components/button";
import checkbox from "./components/checkbox";
import illustration from "./components/illustration";
import input from "./components/input";
import slider from "./components/slider";
import tag from "./components/tag";
import thumbnail from "./components/thumbnail";
import tile from "./components/tile";
import toggle from "./components/toggle";
import token from "./components/token";
import tooltip from "./components/tooltip";

const darkGrayThemeConfig = extendTheme(darkBlueTheme.unresolvedRoles, {
  ...mapKeys(system.colorScheme, (key) => `colorScheme.${key}`),
  ...accordion,
  ...avatarBundle,
  ...button,
  ...checkbox,
  ...illustration,
  ...input,
  ...slider,
  ...tag,
  ...thumbnail,
  ...tile,
  ...toggle,
  ...token,
  ...tooltip,
});

export default darkGrayThemeConfig;
