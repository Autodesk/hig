import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/themes-poc";

export default function Swatch({
  color,
  borderWidth,
  borderRadius,
  boxShadow
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const renderedBackgroundColor =
          color || resolvedRoles["colorScheme.surfaceLevel10Color"];
        const renderedBorderWidth =
          borderWidth || resolvedRoles["basics.borderWidths.small"];
        const renderedBorderRadius =
          borderRadius || resolvedRoles["basics.borderRadii.medium"];
        const renderedBoxShadow = boxShadow || "0 0 0 rgba(0, 0, 0, 0)";
        return (
          <div
            style={{
              height: "32px",
              backgroundColor: renderedBackgroundColor,
              borderRadius: renderedBorderRadius,
              border: `${resolvedRoles["basics.borderWidths.small"]} solid ${
                resolvedRoles["colorScheme.surfaceLevel10Color"]
              }`,
              boxShadow: `0 0 0 ${renderedBorderWidth} ${
                resolvedRoles["colorScheme.surfaceLevel40Color"]
              }, ${renderedBoxShadow}`,
              marginBottom: resolvedRoles["density.spacings.small"]
            }}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

Swatch.propTypes = {
  color: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string
};
