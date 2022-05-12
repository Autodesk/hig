import React from "react";
import PropTypes from "prop-types";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Input from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <Input {...otherProps} />
    </KnobbedThemeProvider>
  );
}

renderStory.propTypes = {
  children: PropTypes.node,
};
