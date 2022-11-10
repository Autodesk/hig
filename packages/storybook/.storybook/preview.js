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
  "Light gray Medium density": lightGrayMediumDensityTheme,
  "Dark blue Medium density": darkBlueMediumDensityTheme,
  "Dark gray Medium density": darkGrayMediumDensityTheme,
  "Light gray High density": lightGrayHighDensityTheme,
  "Dark blue High density": darkBlueHighDensityTheme,
  "Dark gray High density": darkGrayHighDensityTheme,
}

const surfaceStylesheet = styles => (
  {
    ...styles,
    surface: {
      ...styles.surface,
      display: "table",
      minHeight: "300px",
      padding: "20px",
      width: "calc(100% - 40px)",
    },
  }
);

const withThemeProvider=(Story, context)=> (
  <ThemeContext.Provider value={themeData[`${context.globals.colorScheme} ${context.globals.density}`]}>
    <Surface level={200} stylesheet={surfaceStylesheet}>
      <Story />
    </Surface>
  </ThemeContext.Provider>
);

export const decorators = [withThemeProvider];

export const globalTypes = {
  colorScheme: {
    name: "Color scheme",
    description: "Global color scheme for components",
    defaultValue: "Light gray",
    toolbar: {
      icon: "paintbrush",
      items: ["Light gray", "Dark blue", "Dark gray"],
      title: "Color scheme",
      dynamicTitle: true,
    },
  },
  density: {
    name: "Density",
    description: "Global density for components",
    defaultValue: "Medium density",
    toolbar: {
      icon: "unfold",
      items: ["Medium density", "High density"],
      title: "Density",
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
    sort: "requiredFirst",
  },
  options: {
    storySort: {
      order: [
        // This is for ordering and uncomment below
        // in the event we decide to use Storybook as 
        // a public Weave page.
        // "Welcome to Weave",
        "Theme data",
        [
          "Introduction",
          "Tokens",
          [
            "Basics",
            "System",
            "Components",
          ],
          "Theme context",
        ],
        "Basics",
        "Components",
        "Dev lab",
        "Legacy components",
      ],
    },
  },
}
