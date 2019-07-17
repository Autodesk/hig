import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

export default function renderStory(children) {
  return (
    <KnobbedThemeProvider>
      <div>{children}</div>
    </KnobbedThemeProvider>
  );
}
