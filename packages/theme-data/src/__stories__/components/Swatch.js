import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

export default function Swatch({
  color,
  borderWidth,
  borderRadius,
  boxShadowBlur,
  boxShadowColor
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const renderedBackgroundColor =
          color || resolvedRoles["colorScheme.surfaceLevel100Color"];
        const renderedBorderWidth =
          borderWidth || resolvedRoles["basics.borderWidths.small"];
        const renderedBorderRadius =
          borderRadius || resolvedRoles["basics.borderRadii.medium"];
        const renderedBoxShadow =
          boxShadowBlur && boxShadowColor
            ? `0 0 ${boxShadowBlur} ${boxShadowColor}`
            : "0 0 0 rgba(0, 0, 0, 0)";
        return (
          <div
            style={{
              height: "32px",
              backgroundColor: renderedBackgroundColor,
              borderRadius: renderedBorderRadius,
              border: `${resolvedRoles["basics.borderWidths.small"]} solid ${
                resolvedRoles["colorScheme.surfaceLevel100Color"]
              }`,
              boxShadow: `0 0 0 ${renderedBorderWidth} ${
                resolvedRoles["colorScheme.surfaceLevel350Color"]
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
  boxShadowBlur: PropTypes.string,
  boxShadowColor: PropTypes.string
};
