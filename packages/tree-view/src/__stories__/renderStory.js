import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Surface from "@hig/surface";
import TreeView from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <div style={{ width: "300px" }}>
        <Surface borderRadius="m" shadow="low">
          <TreeView {...otherProps}>{children}</TreeView>
        </Surface>
      </div>
    </KnobbedThemeProvider>
  );
}
