import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <DefaultExport {...otherProps} />
    </KnobbedThemeProvider>
  );
}
