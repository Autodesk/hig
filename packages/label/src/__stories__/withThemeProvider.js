import React from "react";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

export default function renderStory(children) {
  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.LIGHT_GRAY, THEMES.WEB_LIGHT, THEMES.DARK_BLUE]}
    >
      <div>{children}</div>
    </KnobbedThemeProvider>
  );
}
