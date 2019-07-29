import React from "react";
import { AVAILABLE_LEVELS } from "@hig/surface";

// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
    MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles'

import Box from '@material-ui/core/Box';

import lightGrayHighTheme from "@hig/theme-material-ui/build/material-ui/lightGrayHighDensityTheme";
import webLightMediumTheme from "@hig/theme-material-ui/build/material-ui/webLightMediumDensityTheme";
import darkBlueHighTheme from "@hig/theme-material-ui/build/material-ui/darkBlueHighDensityTheme";
import darkBlueMediumTheme from "@hig/theme-material-ui/build/material-ui/darkBlueMediumDensityTheme";
import darkGrayHighTheme from "@hig/theme-material-ui/build/material-ui/darkGrayHighDensityTheme";
import darkGrayMediumTheme from "@hig/theme-material-ui/build/material-ui/darkGrayMediumDensityTheme";
import webLightHighTheme from "@hig/theme-material-ui/build/material-ui/webLightHighDensityTheme";
import lightGrayMediumTheme from "@hig/theme-material-ui/build/material-ui/lightGrayMediumDensityTheme";

// Inject each of these theme objects
const colorSchemes = [
  [lightGrayHighTheme, lightGrayMediumTheme],
  [darkBlueHighTheme, darkBlueMediumTheme],
  [darkGrayHighTheme, darkGrayMediumTheme],
  [webLightHighTheme, webLightMediumTheme]
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
      }
    };
  }
  
function ThemeRepeater({ children, column }) {
  const styles = stylesheet({ column });
  return (
    <div>
      {colorSchemes.map(colorScheme => {
        console.log("colorScheme: ", colorScheme)
        const colorSchemeTheme = colorScheme[0];
        return (
          <MuiThemeProvider theme={createMuiTheme(colorSchemeTheme)}>
            <div style={styles.colorSchemeWrapper}>
              <div style={{backgroundColor: colorSchemeTheme.palette.background.default}}>
                <div style={styles.colorSchemeInner}>
                  
                  <Typography variant="h1" >
                    {colorSchemeTheme.metadata.colorSchemeName}
                  </Typography>
                  
                  <div style={styles.densitiesWrapper}>
                      {colorScheme.map(theme => (
                      <div
                        key={theme.metadata.id}
                        style={styles.densityWrapper}
                      >
                      <Box mb={2}>
                        <Typography variant="h2">
                          {theme.metadata.densityName}
                        </Typography>
                      </Box>
                        <MuiThemeProvider theme={createMuiTheme(theme)}>                           
                          <div style={styles.levelsWrapper}>
                            {AVAILABLE_LEVELS.map((level, index) => {
                              return (  
                                <div
                                  style={{
                                    padding: '24px', 
                                    backgroundColor: theme.resolvedRoles[`colorScheme.surfaceLevel${level}Color`]
                                  }}
                                  key={level}
                                  elevation={index}
                                > 
                                  {children()}
                                </div>
                              )
                            })}
                          </div>
                        </MuiThemeProvider>
                      </div>
                      ))}
                  </div>
                </div>  
              </div>
            </div>
          </MuiThemeProvider>
        );
      })}
    </div>
  );
}

export default ThemeRepeater;
