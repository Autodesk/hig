import React from "react";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <DefaultExport {...otherProps}>{children}</DefaultExport>
    </KnobbedThemeProvider>
  );
}
