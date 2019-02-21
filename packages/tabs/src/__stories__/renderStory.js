import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Tabs from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <Tabs {...otherProps}>{children}</Tabs>
    </KnobbedThemeProvider>
  );
}
