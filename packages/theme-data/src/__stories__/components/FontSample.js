import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/theme-context";

export default function FontSample({ fontWeight, fontSize, fontFamily }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const style = {
          fontWeight: fontWeight || resolvedRoles["basics.fontWeights.regular"],
          fontSize: fontSize || resolvedRoles["density.fontSizes.medium"],
          fontFamily: fontFamily || resolvedRoles["basics.fontFamilies.main"],
          marginBottom: resolvedRoles["density.spacings.extraSmall"],
        };
        return (
          <div style={style}>
            The quick, brown fox jumped over the lazy dog.
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

FontSample.propTypes = {
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
};
