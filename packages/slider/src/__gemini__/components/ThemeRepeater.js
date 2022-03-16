/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import ThemeContext from "@hig/theme-context";
import lightGrayMediumTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkBlueMediumTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import darkGrayMediumTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import lightGrayHighTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import darkBlueHighTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkGrayHighTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";

import Surface from "./Surface";
import Text from "./Text";

const colorSchemes = [
  [lightGrayHighTheme, lightGrayMediumTheme],
  [darkBlueHighTheme, darkBlueMediumTheme],
  [darkGrayHighTheme, darkGrayMediumTheme]
];

function stylesheet() {
  return {
    colorSchemeWrapper: {
      padding: "64px"
    },
    colorSchemeInner: {
      padding: "64px"
    },
    densitiesWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    },
    densityWrapper: {
      margin: "32px 0"
    }
  };
}

function ThemeRepeater({ children }) {
  const styles = stylesheet();
  return (
    <div>
      {colorSchemes.map(colorScheme => {
        const colorSchemeTheme = colorScheme[0];
        return (
          <ThemeContext.Provider
            key={colorSchemeTheme.metadata.colorSchemeId}
            value={colorSchemeTheme}
          >
            <div style={styles.colorSchemeWrapper}>
              <Surface>
                <div style={styles.colorSchemeInner}>
                  <Text variant="h1">
                    {colorSchemeTheme.metadata.colorSchemeName}
                  </Text>
                  <div style={styles.densitiesWrapper}>
                    {colorScheme.map(theme => (
                      <div
                        key={theme.metadata.id}
                        style={styles.densityWrapper}
                      >
                        <Text variant="h2">{theme.metadata.densityName}</Text>
                        <ThemeContext.Provider value={theme}>
                          <div>
                            <Surface key={theme.metadata.id}>
                              {children({
                                id: `${
                                  colorSchemeTheme.metadata.colorSchemeId
                                }-${theme.metadata.densityId}`
                              })}
                            </Surface>
                          </div>
                        </ThemeContext.Provider>
                      </div>
                    ))}
                  </div>
                </div>
              </Surface>
            </div>
          </ThemeContext.Provider>
        );
      })}
    </div>
  );
}

ThemeRepeater.propTypes = {
  children: PropTypes.node
};

export default ThemeRepeater;
