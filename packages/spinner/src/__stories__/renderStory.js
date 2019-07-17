import React from "react";
import PropTypes from "prop-types";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Spinner from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <Spinner {...otherProps} />
    </KnobbedThemeProvider>
  );
}

renderStory.propTypes = {
  children: PropTypes.node
};
