import React from "react";
import PropTypes from "prop-types";
import { select } from "@storybook/addon-knobs/react";
import { ThemeContext } from "@hig/theme-context";

import lightGrayMediumDensityTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkBlueMediumDensityTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import webLightMediumDensityTheme from "@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json";
import lightGrayHighDensityTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import darkBlueHighDensityTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import webLightHighDensityTheme from "@hig/theme-data/build/json/webLightHighDensityTheme/theme.json";

const densityThemes = {
  "high-density": {
    "hig-light": webLightHighDensityTheme,
    "hig-light-gray": lightGrayHighDensityTheme,
    "hig-dark-blue": darkBlueHighDensityTheme
  },
  "medium-density": {
    "hig-light": webLightMediumDensityTheme,
    "hig-light-gray": lightGrayMediumDensityTheme,
    "hig-dark-blue": darkBlueMediumDensityTheme
  }
};

const densityOptions = {
  "high-density": "High",
  "medium-density": "Medium"
};

const DEFAULT_THEME_ID = "hig-light";
const DEFAULT_DENSITY = "medium-density";

const COLOR_THEME_IDS = {
  WEB_LIGHT: "hig-light",
  LIGHT_GRAY: "hig-light-gray",
  DARK_BLUE: "hig-dark-blue"
};

function themeOptions(themeIds) {
  return themeIds.reduce((acc, id) => {
    const theme = densityThemes["medium-density"][id];
    return {
      ...acc,
      [theme.id]: theme.name
    };
  }, {});
}

function Surface({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          style={{
            backgroundColor: resolvedRoles["colorScheme.surfaceLevel10Color"],
            padding: resolvedRoles["density.spacings.extraLarge"],
            margin: `-${resolvedRoles["density.spacings.extraLarge"]}`,
            borderRadius: resolvedRoles["basics.borderRadii.medium"],
            transiton: "all 0.3s",
            minHeight: "20vh"
          }}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

Surface.propTypes = {
  children: PropTypes.node
};

const KnobbedThemeProvider = ({ children, supportedThemes }) => {
  const knobGroup = "Theme";
  const themeId = select(
    "Color scheme",
    themeOptions(supportedThemes),
    DEFAULT_THEME_ID,
    knobGroup
  );
  const densityId = select(
    "Density",
    densityOptions,
    DEFAULT_DENSITY,
    knobGroup
  );
  const theme = densityThemes[densityId][themeId];

  return (
    <ThemeContext.Provider value={theme}>
      <Surface>{children}</Surface>
    </ThemeContext.Provider>
  );
};

KnobbedThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  supportedThemes: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(COLOR_THEME_IDS))
  )
};

KnobbedThemeProvider.defaultProps = {
  supportedThemes: [DEFAULT_THEME_ID],
  supportedDensities: [DEFAULT_DENSITY]
};

export default KnobbedThemeProvider;
export { COLOR_THEME_IDS as THEMES };
