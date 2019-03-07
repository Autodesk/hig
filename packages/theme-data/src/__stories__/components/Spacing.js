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
            borderColor: resolvedRoles["colorScheme.accentColor"],
            borderStyle: "dashed",
            borderWidth: resolvedRoles["basics.borderWidths.small"],
            borderRadius: resolvedRoles["basics.borderRadii.small"],
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
