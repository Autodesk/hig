
import ThemeContext from "@hig/theme-context";
import Surface from "@hig/surface";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import lightGrayMediumDensityTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkBlueMediumDensityTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import darkGrayMediumDensityTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import lightGrayHighDensityTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import darkBlueHighDensityTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkGrayHighDensityTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";

const providerFn = ({ theme, children }) => {
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
  return (
    <ThemeContext.Provider value={theme}>
      <Surface stylesheet={surfaceStylesheet}>{children}</Surface>
    </ThemeContext.Provider>
  );
};

addDecorator(withThemes(
  null,
  [
    { name: "light-gray-medium",
      ...lightGrayMediumDensityTheme
    },
    {
      name: "dark-blue-medium",
      ...darkBlueMediumDensityTheme
    },
    {
      name: "dark-gray-medium",
      ...darkGrayMediumDensityTheme
    },
    {
      name: "light-gray-high",
      ...lightGrayHighDensityTheme
    },
    {
      name: "dark-blue-high",
      ...darkBlueHighDensityTheme
    },
    {
      name: "dark-gray-high",
      ...darkGrayHighDensityTheme
    }
  ],
  { providerFn }
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}