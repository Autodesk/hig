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
      supportedThemes={[THEMES.WEB_LIGHT, THEMES.DARK_BLUE]}
    >
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      />
      <DefaultExport {...otherProps}>{children}</DefaultExport>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      />
    </KnobbedThemeProvider>
  );
}
