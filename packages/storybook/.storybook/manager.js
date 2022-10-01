import { addons } from "@storybook/addons";

import weaveTheme from "./weaveTheme";

const storybookRoots = [
];

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    collapsedRoots: ["basics", "components", "dev-lab", "legacy-components"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: true },
    "storybook/background": { hidden: true },
  },
  theme: weaveTheme,
});
