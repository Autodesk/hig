import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Accordion from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <div style={{ width: "300px" }}>
        <Accordion {...otherProps}>{children}</Accordion>
      </div>
    </KnobbedThemeProvider>
  );
}
