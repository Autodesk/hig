import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/themes-poc";

export default function Swatch({ length }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          style={{
            height: length,
            width: length,
            backgroundColor: resolvedRoles["colorScheme.accentColor500"],
            marginBottom: resolvedRoles["density.spacings.small"]
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}

Swatch.propTypes = {
  length: PropTypes.string
};
