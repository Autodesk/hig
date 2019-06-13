/*
  Build Material UI Themes
  =========================

  Write theme-data into objects compatable with Google's MuiThemeProvider
*/

import path from "path";
import fs from "fs";
import mkdirp from "mkdirp";
import dedent from "dedent";

import colorSchemes from "@hig/theme-data/src/colorSchemes";
import densities from "@hig/theme-data/src/densities";
import generateAllThemes from "@hig/theme-data/src/utils/generateAllThemes";

const buildMuiConfigPath = path.join(process.cwd(), "build/material-ui");

function writeMaterialUiConfigFile(dirPath, metadata, theme) {
  let themeBackground;
  let paperBackground;

  switch (metadata.colorSchemeId) {
    case "hig-dark-blue":
      themeBackground = theme["basics.colors.surfaceDarkBlueLevel100"];
      paperBackground = theme["basics.colors.surfaceDarkBlueLevel200"];
      break;
    case "hig-dark-gray":
      themeBackground = theme["basics.colors.surfaceDarkGrayLevel100"];
      paperBackground = theme["basics.colors.surfaceDarkGrayLevel200"];
      break;
    case "hig-light-gray":
      themeBackground = theme["basics.colors.surfaceLightGrayLevel100"];
      paperBackground = theme["basics.colors.surfaceLightGrayLevel100"];
      break;
    case "hig-light":
      themeBackground = theme["basics.colors.surfaceLightGrayLevel100"];
      paperBackground = theme["basics.colors.surfaceLightGrayLevel100"];
      break;
    default:
      break;
  }

  const MaterialUITheme = dedent`export default {
    metadata: ${JSON.stringify(metadata, null, 4)},
    resolvedRoles: ${JSON.stringify(theme, null, 4)},
    props: {
      MuiButtonBase: {
        disableRipple: true
      }
    },
    typography: {
      fontFamily: "${theme["basics.fontFamilies.main"]}",
      fontWeightRegular: "${theme["basics.fontWeights.regular"]}",
      fontWeightMedium: "${theme["basics.fontWeights.bold"]}",
      useNextVariants: true,
      body1: {
        fontSize: "${theme["density.fontSizes.medium"]}",
        fontWeight: "${theme["basics.fontWeights.regular"]}",
        lineHeight: "${theme["basics.lineHeights.medium"]}",
        color: "${theme["colorScheme.textColor"]}"
      },
      h1: {
        fontSize: "${theme["density.fontSizes.extraExtraLarge"]}",
        fontWeight: "${theme["typography.h1.fontWeight"]}",
        lineHeight: "${theme["basics.lineHeights.mediumLarge"]}",
        color: "${theme["typography.h1.color"]}"
      },
      h2: {
        fontSize: "${theme["density.fontSizes.extraLarge"]}",
        fontWeight: "${theme["typography.h2.fontWeight"]}",
        lineHeight: "${theme["basics.lineHeights.mediumMedium"]}",
        color: "${theme["typography.h2.color"]}"
      },
      h3: {
        fontSize: "${theme["density.fontSizes.large"]}",
        fontWeight: "${theme["typography.h3.fontWeight"]}",
        lineHeight: "${theme["basics.lineHeights.mediumSmall"]}",
        color: "${theme["typography.h3.color"]}"
      },
      h4: {
        fontSize: "${theme["density.fontSizes.medium"]}",
        fontWeight: "${theme["basics.fontWeights.medium"]}",
        lineHeight: "${theme["basics.lineHeights.mediumSmall"]}",
        color: "${theme["colorScheme.textColor"]}"
      },
      h5: {
        fontSize: "${theme["density.fontSizes.small"]}",
        fontWeight: "${theme["basics.fontWeights.medium"]}",
        lineHeight: "${theme["basics.lineHeights.mediumSmall"]}",
        color: "${theme["colorScheme.textColor"]}"
      },
      h6: {
        fontSize: "${theme["density.fontSizes.small"]}",
        fontWeight: "${theme["basics.fontWeights.medium"]}",
        lineHeight: "${theme["basics.lineHeights.mediumSmall"]}",
        color: "${theme["colorScheme.textColor"]}"
      },
      caption: {
        fontSize: "${theme["typography.caption.fontSize"]}",
        lineHeight: "${theme["typography.caption.lineHeight"]}",
        color: "${theme["typography.caption.color"]}",
        textAlign: "left"
      }
    },
    palette: {
      background: {
        default: "${themeBackground}",
        paper: "${paperBackground}"
      },
      primary: {
        main: "${theme["colorScheme.accentColor"]}"
      },
      secondary: {
        main: "${theme["colorScheme.accentColor"]}"
      }
    },
    overrides: {
      MuiButton: {
        root: {
          borderColor: 'transparent',
          borderRadius: "${theme["button.borderRadius"]}",
          borderWidth: "${theme["button.borderWidth"]}",
          fontFamily: "${theme["button.fontFamily"]}",
          fontSize: "${theme["density.fontSizes.medium"]}!important",
          fontWeight: "${theme["button.fontWeight"]}",
          lineHeight: "${theme["button.lineHeight"]}",
          minWidth: "${theme["button.minimumWidth"]}",
          padding: "${theme["density.spacings.extraSmall"]} ${theme["density.spacings.medium"]}!important",
          textTransform: 'none',
          marginLeft: "${theme["button.gutter"]}",
          marginRight: "${theme["button.gutter"]}",
      },
      text: {
        backgroundColor: "${theme["button.flat.backgroundColor"]}",
        borderColor: "${theme["button.flat.borderColor"]}",
        color: "${theme["button.flat.textColor"]}",
        "& svg * ": {fill: "${theme["button.flat.icon.color"]}"},
        "&:hover": {
          backgroundColor: "${theme["button.flat.hover.backgroundColor"]}",
          borderColor: "${theme["button.flat.hover.borderColor"]}",
          boxShadow: "${theme["button.flat.hover.halo.color"]} 0 0 0 2px",
          color: "${theme["button.flat.hover.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.flat.hover.icon.color"]}"
          },
        },
        "&:focus": {
          backgroundColor: "${theme["button.flat.focus.backgroundColor"]}",
          borderColor: "${theme["button.flat.focus.borderColor"]}",
          boxShadow: "${theme["button.flat.focus.halo.color"]} 0 0 0 2px",
          color: "${theme["button.flat.focus.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.flat.focus.icon.color"]}"
          },
        },
        "&:active": {
          backgroundColor: "${theme["button.flat.pressed.backgroundColor"]}",
          borderColor: "${theme["button.flat.pressed.borderColor"]}",
          boxShadow: "${theme["button.flat.pressed.halo.color"]} 0 0 0 ${theme["button.flat.pressed.haloWidth"]}!important",
          color: "${theme["button.flat.pressed.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.flat.pressed.icon.color"]}"
          },
        },
        "&$disabled": {
          backgroundColor: "${theme["button.flat.backgroundColor"]}",
          color: "${theme["button.flat.textColor"]}",
          opacity: '0.3',
        }
      },
      outlined: {
        backgroundColor: "${theme["button.outline.backgroundColor"]}",
        borderColor: "${theme["button.outline.borderColor"]}",
        color: "${theme["button.outline.textColor"]}",
        "& svg * ": {
          fill: "${theme["button.outline.icon.color"]}"
        },
        "&:hover": {
          backgroundColor: "${theme["button.outline.hover.backgroundColor"]}",
          borderColor: "${theme["button.outline.hover.borderColor"]}",
          boxShadow: "${theme["button.outline.hover.halo.color"]} 0 0 0 2px",
          color: "${theme["button.outline.hover.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.outline.hover.icon.color"]}"
          },
        },
        "&:focus": {
          backgroundColor: "${theme["button.outline.focus.backgroundColor"]}",
          borderColor: "${theme["button.outline.focus.borderColor"]}",
          boxShadow: "${theme["button.outline.focus.halo.color"]} 0 0 0 2px",
          color: "${theme["button.outline.focus.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.outline.focus.icon.color"]}"
          },
        },
        "&:active": {
          backgroundColor: "${theme["button.outline.pressed.backgroundColor"]}",
          borderColor: "${theme["button.outline.pressed.borderColor"]}",
          boxShadow: "${theme["button.outline.pressed.halo.color"]} 0 0 0 ${theme["button.outline.pressed.haloWidth"]}!important",
          color: "${theme["button.outline.pressed.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.outline.pressed.icon.color"]}"
          },
        },
        "&$disabled": {
          backgroundColor: "${theme["button.outline.backgroundColor"]}",
          borderColor: "${theme["button.outline.borderColor"]}",
          color: "${theme["button.outline.textColor"]}",
          opacity: '0.3',
        }
      },
      contained: {
        backgroundColor: "${theme["button.solid.backgroundColor"]}",
        borderColor: "${theme["button.solid.borderColor"]}",
        boxShadow: 'none',
        color: "${theme["button.solid.textColor"]}",
        "& svg * ": {
          fill: "${theme["button.solid.icon.color"]}"
        },
        "&:hover": {
          backgroundColor: "${theme["button.solid.hover.backgroundColor"]}",
          borderColor: "${theme["button.solid.hover.borderColor"]}",
          boxShadow: "${theme["button.solid.hover.halo.color"]} 0 0 0 2px",
          color: "${theme["button.solid.hover.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.solid.hover.icon.color"]}"
          },
        },
        "&:focus": {
          backgroundColor: "${theme["button.solid.focus.backgroundColor"]}",
          borderColor: "${theme["button.solid.focus.borderColor"]}",
          boxShadow: "${theme["button.solid.focus.halo.color"]} 0 0 0 2px",
          color: "${theme["button.solid.focus.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.solid.focus.icon.color"]}"
          },
        },
        "&:active": {
          backgroundColor: "${theme["button.solid.pressed.backgroundColor"]}",
          borderColor: "${theme["button.solid.pressed.borderColor"]}",
          boxShadow: "${theme["button.solid.pressed.halo.color"]} 0 0 0 ${theme["button.solid.pressed.haloWidth"]}!important",
          color: "${theme["button.solid.pressed.textColor"]}",
          "& svg * ": {
            fill: "${theme["button.solid.pressed.icon.color"]}"
          },
        },
        "&$disabled": {
          backgroundColor: "${theme["button.solid.backgroundColor"]}",
          color: "${theme["button.solid.textColor"]}",
          opacity: '0.3',
        }
        }
      }
    }
  };\n
  `;

  mkdirp.sync(dirPath);
  fs.writeFileSync(path.join(dirPath, `${metadata.fileName}.js`), MaterialUITheme);
}

function writeTheme(theme) {
  const { metadata, resolvedRoles } = theme;
  writeMaterialUiConfigFile(buildMuiConfigPath, metadata, resolvedRoles);
}

generateAllThemes(colorSchemes, densities).forEach(writeTheme);
