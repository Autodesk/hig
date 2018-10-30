import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/theme-context";

export default function Swatch({ length }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          style={{
            height: length,
            width: length,
            backgroundColor: resolvedRoles["colorScheme.accentColor"],
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
