import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/themes";

export default function Swatch({ length }) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => (
        <div
          style={{
            height: length,
            width: length,
            backgroundColor: themeData["COLOR_SCHEME.ACCENT_COLOR_500"]
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}

Swatch.propTypes = {
  length: PropTypes.string
};
