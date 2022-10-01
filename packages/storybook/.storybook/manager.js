import React from "react";
import { addons } from "@storybook/addons";
import Typography from "@hig/typography";

import weaveTheme from "./weaveTheme";

const ROOT_IDS = [
  "basics",
  "components",
  "dev-lab",
  "legacy-components",
  "theme-data",
];

const customRootStyles = (styles, props, themeData) => ({
  ...styles,
  typography: {
    ...styles.typography,
    color: themeData["colorScheme.text.default"],
    fontFamily: themeData["basics.fontFamilies.main"],
    fontSize: themeData["basics.fontSizes.mediumMedium"],
    fontWeight: themeData["basics.fontWeights.bold"],
    letterSpacing: "normal",
    lineHeight: themeData["basics.lineHeights.mediumExtraLarge"],
    textTransform: "initial",
    transform: "translateY(-3px)",
  },
});

const customSubRootStyles = (styles, props, themeData) => ({
  ...styles,
  typography: {
    ...styles.typography,
    color: themeData["colorScheme.text.default"],
    fontFamily: themeData["basics.fontFamilies.main"],
    fontSize: themeData["basics.fontSizes.mediumSmall"],
    fontWeight: themeData["basics.fontWeights.medium"],
    letterSpacing: "normal",
    lineHeight: themeData["basics.lineHeights.mediumExtraExtraLarge"],
    textTransform: "initial",
  },
});

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
    collapsedRoots: ROOT_IDS,
    renderLabel: (item) => {
      if (ROOT_IDS.indexOf(item.id) > -1) {
        return <Typography stylesheet={customRootStyles}>{item.name}</Typography>;
      }
      return <Typography stylesheet={customSubRootStyles}>{item.name}</Typography>;
    },
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
