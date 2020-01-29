import React from "react";
import ThemeContext from "@hig/theme-context";
import Surface, { AVAILABLE_LEVELS } from "@hig/surface";
import Text from "./Text";

import lightGrayMediumTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkBlueMediumTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import darkGrayMediumTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import lightGrayHighTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import darkBlueHighTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkGrayHighTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";

const colorSchemes = [
  [lightGrayHighTheme, lightGrayMediumTheme],
  [darkBlueHighTheme, darkBlueMediumTheme],
  [darkGrayHighTheme, darkGrayMediumTheme]
];

function stylesheet({ row }) {
  return {
    colorSchemeWrapper: {
      padding: "64px"
    },
    colorSchemeInner: {
      padding: "64px"
    },
    densitiesWrapper: {
      display: "flex",
      flexDirection: row ? "row" : "column",
      justifyContent: "space-around"
    },
    densityWrapper: {
      margin: "32px 0"
    },
    levelsWrapper: {
      display: "flex",
      flexWrap: "wrap"
    },
    level: {
      flex: "1 1 auto",
      alignItems: "center"
    }
  };
}

function ThemeRepeater({ children, column }) {
  const styles = stylesheet({ column });
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
                            <div style={styles.levelsWrapper}>
                              {AVAILABLE_LEVELS.map(level => (
                                <Surface
                                  key={level}
                                  level={level}
                                  style={styles.level}
                                  horizontalPadding="l"
                                  verticalPadding="l"
                                >
                                  {children({
                                    theme,
                                    id: `${
                                      colorSchemeTheme.metadata.colorSchemeId
                                    }-${theme.metadata.densityId}-${level}`,
                                    level
                                  })}
                                </Surface>
                              ))}
                            </div>
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

export default ThemeRepeater;
