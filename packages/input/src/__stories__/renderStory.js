import React from "react";
import PropTypes from "prop-types";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Input from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.LIGHT_GRAY, THEMES.WEB_LIGHT, THEMES.DARK_BLUE]}
    >
      <Input {...otherProps} />
    </KnobbedThemeProvider>
  );
}

renderStory.propTypes = {
  children: PropTypes.node
};
