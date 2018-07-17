import React from "react";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.LIGHT_GRAY, THEMES.WEB_LIGHT, THEMES.DARK_BLUE]}
    >
      <div>
        <DefaultExport {...otherProps}>{children}</DefaultExport>
      </div>
    </KnobbedThemeProvider>
  );
}
