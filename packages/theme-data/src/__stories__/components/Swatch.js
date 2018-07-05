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
          color || themeData["COLOR_SCHEME.SURFACE_LEVEL_1_COLOR"];
        const renderedBorderWidth =
          borderWidth || themeData["BASICS.BORDER_WIDTHS.S"];
        const renderedBorderRadius =
          borderRadius || themeData["BASICS.BORDER_RADII.M"];
        const renderedBoxShadow = boxShadow || "0 0 0 rgba(0, 0, 0, 0)";
        return (
          <div
            style={{
              height: "32px",
              backgroundColor: renderedBackgroundColor,
              borderRadius: renderedBorderRadius,
              border: `${themeData["BASICS.BORDER_WIDTHS.S"]} solid ${
                themeData["COLOR_SCHEME.SURFACE_LEVEL_1_COLOR"]
              }`,
              boxShadow: `0 0 0 ${renderedBorderWidth} ${
                themeData["COLOR_SCHEME.SURFACE_LEVEL_4_COLOR"]
              }, ${renderedBoxShadow}`,
              marginBottom: themeData["BASICS.SPACINGS.XS"]
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
