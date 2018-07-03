'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var borderRadii = {
  S: "0",
  M: "2px",
  L: "4px",
  ELIPSE: "50%",
  PILL: "1000em"
};

var borderWidths = {
  HAIRLINE: "1px",
  S: "1px",
  M: "2px"
};

var breakpoints = {
  TABLET_PORTRAIT: "600px",
  TABLET_LANDSCAPE: "900px",
  DESKTOP: "1200px",
  BIG_DESKTOP: "1800px"
};

var colors = {
  BLACK: "#000000",
  WHITE: "#FFFFFF",

  // Primary colors
  CHARCOAL_100: "#eeeeee",
  CHARCOAL_200: "#dcdcdc",
  CHARCOAL_300: "#cccccc",
  CHARCOAL_400: "#bbbbbb",
  CHARCOAL_500: "#999999",
  CHARCOAL_600: "#808080",
  CHARCOAL_700: "#666666",
  CHARCOAL_800: "#4d4d4d",
  CHARCOAL_900: "#3c3c3c",

  AUTODESK_BLUE_100: "#CDEAF7",
  AUTODESK_BLUE_200: "#9BD5EF",
  AUTODESK_BLUE_300: "#6AC0E7",
  AUTODESK_BLUE_400: "#38ABDF",
  AUTODESK_BLUE_500: "#0696D7",
  AUTODESK_BLUE_600: "#0686C2",
  AUTODESK_BLUE_700: "#0571A1",
  AUTODESK_BLUE_800: "#034B6C",
  AUTODESK_BLUE_900: "#022C40",

  // Secondary colors
  DARK_BLUE_100: "#E1EBF7",
  DARK_BLUE_200: "#D1DEEE",
  DARK_BLUE_300: "#A3BCDC",
  DARK_BLUE_400: "#749BCB",
  DARK_BLUE_500: "#4679B9",
  DARK_BLUE_600: "#1858A8",
  DARK_BLUE_700: "#12437F",
  DARK_BLUE_800: "#0E3666",
  DARK_BLUE_900: "#0C2C54",

  TURQUOISE_100: "#D6F2EF",
  TURQUOISE_200: "#ADE4DE",
  TURQUOISE_300: "#84D7CE",
  TURQUOISE_400: "#5BC9BD",
  TURQUOISE_500: "#32BCAD",
  TURQUOISE_600: "#23A597",
  TURQUOISE_700: "#268D82",
  TURQUOISE_800: "#20756C",
  TURQUOISE_900: "#195E57",

  GREEN_100: "#E7F2D9",
  GREEN_200: "#CFE4B3",
  GREEN_300: "#B7D78C",
  GREEN_400: "#9FC966",
  GREEN_500: "#87B340",
  GREEN_600: "#658D30",
  GREEN_700: "#5D822C",
  GREEN_800: "#4C6B24",
  GREEN_900: "#445E20",

  YELLOW_ORANGE_100: "#FEECD1",
  YELLOW_ORANGE_200: "#FDDAA4",
  YELLOW_ORANGE_300: "#FCC776",
  YELLOW_ORANGE_400: "#FBB549",
  YELLOW_ORANGE_500: "#FAA21B",
  YELLOW_ORANGE_600: "#BB7A14",
  YELLOW_ORANGE_700: "#916010",
  YELLOW_ORANGE_800: "#7D510E",
  YELLOW_ORANGE_900: "#523609",

  RED_100: "#FFD9D9",
  RED_200: "#F8D3D3",
  RED_300: "#F1A7A7",
  RED_400: "#EB7A7A",
  RED_500: "#EC4A41",
  RED_600: "#DD2222",
  RED_700: "#A61A1A",
  RED_800: "#6F1111",
  RED_900: "#630F0F",

  // Tertiary colors
  SLATE_100: "#E9F0F7",
  SLATE_200: "#DCE7F3",
  SLATE_300: "#C1CEDC",
  SLATE_400: "#A7BACF",
  SLATE_500: "#7993B0",
  SLATE_600: "#6784A6",
  SLATE_700: "#4B6B8F",
  SLATE_800: "#354D67",
  SLATE_900: "#2C3E53",

  PURPLE_100: "#F4EDFD",
  PURPLE_200: "#EADCFD",
  PURPLE_300: "#D5BCF7",
  PURPLE_400: "#C5A1F8",
  PURPLE_500: "#B385F2",
  PURPLE_600: "#A76EF5",
  PURPLE_700: "#8558C5",
  PURPLE_800: "#5F3E8E",
  PURPLE_900: "#482F6B",

  PINK_100: "#FFEBF5",
  PINK_200: "#FFD6EB",
  PINK_300: "#FFB8DB",
  PINK_400: "#FF8CC6",
  PINK_500: "#FC56A9",
  PINK_600: "#E84396",
  PINK_700: "#C72877",
  PINK_800: "#991F5C",
  PINK_900: "#781848",

  SALMON_100: "#FFEFEC",
  SALMON_200: "#FCDED9",
  SALMON_300: "#FFBEB3",
  SALMON_400: "#FF9582",
  SALMON_500: "#F26A52",
  SALMON_600: "#DB5942",
  SALMON_700: "#A84A39",
  SALMON_800: "#853729",
  SALMON_900: "#66251A",

  // Surface colors
  SURFACE_LIGHT_GRAY_LEVEL_1: "#FFFFFF",
  SURFACE_LIGHT_GRAY_LEVEL_1_5: "#F5F5F5",
  SURFACE_LIGHT_GRAY_LEVEL_2: "#EEEEEE",
  SURFACE_LIGHT_GRAY_LEVEL_3: "#D9D9D9",
  SURFACE_LIGHT_GRAY_LEVEL_4: "#CCCCCC",

  SURFACE_DARK_BLUE_LEVEL_1: "#454F61",
  SURFACE_DARK_BLUE_LEVEL_1_5: "#3B4453",
  SURFACE_DARK_BLUE_LEVEL_2: "#2E3440",
  SURFACE_DARK_BLUE_LEVEL_3: "#222933",
  SURFACE_DARK_BLUE_LEVEL_4: "#1A1F26",

  SURFACE_DARK_GRAY_LEVEL_1: "#616161",
  SURFACE_DARK_GRAY_LEVEL_1_5: "#545454",
  SURFACE_DARK_GRAY_LEVEL_2: "#404040",
  SURFACE_DARK_GRAY_LEVEL_3: "#333333",
  SURFACE_DARK_GRAY_LEVEL_4: "#262626",

  // Alert colors
  SUCCESS: "#87B340",
  WARNING: "#FAA21B",
  ERROR: "#EC4A41"
};

var fontFamilies = {
  MAIN: "ArtifaktElement, sans-serif"
};

var fontSizes = {
  S: "12px",
  M: "14px",
  L: "16px"
};

var fontWeights = {
  REGULAR: 400,
  MEDIUM: 600,
  BOLD: 700
};

var lineHeights = {
  S: "18px",
  M: "20px",
  L: "22px"
};

var shadows = {
  S: "0 0 4px 0 rgba(0, 0, 0, 0.25)",
  M: "0 0 8px 0 rgba(0, 0, 0, 0.25)",
  L: "0 0 16px 0 rgba(0, 0, 0, 0.25)"
};

var spacings = {
  XXS: "4px",
  XS: "8px",
  S: "12px",
  M: "16px",
  L: "24px",
  XL: "32px",
  XXL: "64px"
};

var basics = {
  borderRadii: borderRadii,
  borderWidths: borderWidths,
  breakpoints: breakpoints,
  colors: colors,
  fontFamilies: fontFamilies,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  shadows: shadows,
  spacings: spacings
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * extendTheme
 * @param {*} theme
 * @param {*} extension
 *
 * Add additional roles to a theme
 */
var extendTheme = function extendTheme(theme, extension) {
  return _extends({}, theme, extension);
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function flattenReference(theme, role) {
  var value = theme[role];
  if (!value) {
    throw new Error("No role \"" + role + "\" in theme");
  }
  if (value.abstract) {
    throw new Error("You must provide a value for role \"" + role + "\"");
  }
  return value.ref ? flattenReference(theme, value.ref) : value;
}

var serializeTheme = function serializeTheme(theme, extension) {
  return Object.keys(theme).reduce(function (acc, role) {
    return _extends$1({}, acc, _defineProperty({}, role, flattenReference(theme, role)));
  }, {});
};

exports.basics = basics;
exports.extendTheme = extendTheme;
exports.serializeTheme = serializeTheme;
