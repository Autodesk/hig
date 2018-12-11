/* eslint-disable react/prop-types */
import React from "react";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Flyout from "../index";
import getKnobs from "./getKnobs";

function Wrapper({ children }) {
  return (
    <div
      style={{
        display: "flex",
        height: "300px",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
}

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.WEB_LIGHT, THEMES.DARK_BLUE, THEMES.LIGHT_GRAY]}
    >
      <Wrapper>
        <Flyout {...otherProps}>{children}</Flyout>
      </Wrapper>
    </KnobbedThemeProvider>
  );
}
