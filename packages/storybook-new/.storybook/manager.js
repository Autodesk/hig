import React from "react";
import { addons } from "@storybook/addons";
import Typography from "@hig/typography";

import weaveTheme from "./weaveTheme";

const ROOT_IDS = [
  "basics",
  "dev-lab",
  "components",
  "legacy-components",
  "theme-data",
];

const customRootStyles = (styles, props) => ({
  ...styles,
  typography: {
    ...styles.typography,
    fontWeight: 700,
    textTransform: "initial",
    letterSpacing: "normal",
    // transform: "translateY(-5px)",
  }
})

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
    showRoots: true,
    renderLabel: (item) => {
      console.log(item);
      console.log('hi')
      if (ROOT_IDS.indexOf(item.id) > -1) {
        console.log('here');
        return <Typography stylesheet={customRootStyles}>{item.name}</Typography>;
      }
      return <Typography>{item.name}</Typography>;
    },
    collapsedRoots: ROOT_IDS,
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
