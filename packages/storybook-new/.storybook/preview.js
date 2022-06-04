import ThemeContext from "@hig/theme-context";
import Surface from "@hig/surface";

import lightGrayMediumDensityTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkBlueMediumDensityTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import darkGrayMediumDensityTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import lightGrayHighDensityTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import darkBlueHighDensityTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkGrayHighDensityTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";

import "@hig/fonts/build/ArtifaktElement.css";

const themeData = {
  "LightGrayMedium": lightGrayMediumDensityTheme,
  "DarkBlueMedium": darkBlueMediumDensityTheme,
  "DarkGrayMedium": darkGrayMediumDensityTheme,
  "LightGrayHigh": lightGrayHighDensityTheme,
  "DarkBlueHigh": darkBlueHighDensityTheme,
  "DarkGrayHigh": darkGrayHighDensityTheme,
}

const surfaceStylesheet = styles => (
  {
    ...styles,
    surface: {
      ...styles.surface,
      minHeight: "300px",
      padding: "20px"
    }
  }
);

const withThemeProvider=(Story, context)=>{
  const colorScheme = context.globals.colorScheme.replace(' ', '');

  return (
    <ThemeContext.Provider value={themeData[`${colorScheme}${context.globals.density}`]}>
      <Surface level={200} stylesheet={surfaceStylesheet}>
        <Story />
      </Surface>
    </ThemeContext.Provider>
  )
}
export const decorators = [withThemeProvider];

export const globalTypes = {
  colorScheme: {
    name: "Color Scheme",
    description: "Global color scheme for components",
    defaultValue: "Light Gray",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Light Gray", "Dark Blue", "Dark Gray"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
  density: {
    name: "Density",
    description: "Global density for components",
    defaultValue: "Medium",
    toolbar: {
      icon: "unfold",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Medium", "High"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}
