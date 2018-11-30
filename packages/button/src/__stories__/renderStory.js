import React from "react";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.WEB_LIGHT, THEMES.LIGHT_GRAY, THEMES.DARK_BLUE]}
    >
      <DefaultExport {...otherProps}>{children}</DefaultExport>
    </KnobbedThemeProvider>
  );
}
