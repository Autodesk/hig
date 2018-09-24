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
          borderWidth || themeData["basics.borderWidths.s"];
        const renderedBorderRadius =
          borderRadius || themeData["basics.borderRadii.m"];
        const renderedBoxShadow = boxShadow || "0 0 0 rgba(0, 0, 0, 0)";
        return (
          <div
            style={{
              height: "32px",
              backgroundColor: renderedBackgroundColor,
              borderRadius: renderedBorderRadius,
              border: `${themeData["basics.borderWidths.s"]} solid ${
                themeData["colorScheme.surfaceLevel1Color"]
              }`,
              boxShadow: `0 0 0 ${renderedBorderWidth} ${
                themeData["colorScheme.surfaceLevel4Color"]
              }, ${renderedBoxShadow}`,
              marginBottom: themeData["density.spacings.s"]
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
