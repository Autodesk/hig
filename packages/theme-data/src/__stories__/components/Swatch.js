import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/themes";

export default function Swatch({
  color,
  borderWidth,
  borderRadius,
  boxShadow
}) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const renderedBackgroundColor =
          color || themeData["colorScheme.surfaceLevel1Color"];
        const renderedBorderWidth =
          borderWidth || themeData["basics.borderWidths.S"];
        const renderedBorderRadius =
          borderRadius || themeData["basics.borderRadii.M"];
        const renderedBoxShadow = boxShadow || "0 0 0 rgba(0, 0, 0, 0)";
        return (
          <div
            style={{
              height: "32px",
              backgroundColor: renderedBackgroundColor,
              borderRadius: renderedBorderRadius,
              border: `${themeData["basics.borderWidths.S"]} solid ${
                themeData["colorScheme.surfaceLevel1Color"]
              }`,
              boxShadow: `0 0 0 ${renderedBorderWidth} ${
                themeData["colorScheme.surfaceLevel4Color"]
              }, ${renderedBoxShadow}`,
              marginBottom: themeData["density.spacings.S"]
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
