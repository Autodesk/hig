import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Surface from "@hig/surface";
import Menu, { MenuGroup } from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props, component) {
  const HIGComponent = component === `Menu` ? Menu : MenuGroup;
  const { children, theme, ...otherProps } = getKnobs(props, HIGComponent);

  return (
    <KnobbedThemeProvider>
      <div style={{ width: "300px" }}>
        <Surface borderRadius="m" shadow="low">
          <HIGComponent {...otherProps}>{children}</HIGComponent>
        </Surface>
      </div>
    </KnobbedThemeProvider>
  );
}
