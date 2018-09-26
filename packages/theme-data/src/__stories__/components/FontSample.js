import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "@hig/themes";

import BASICS from "../../basics";

export default function FontSample({ fontWeight, fontSize, fontFamily }) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const style = {
          fontWeight: fontWeight || BASICS.FONT_WEIGHTS.NORMAL,
          fontSize: fontSize || BASICS.FONT_SIZES.M,
          fontFamily: fontFamily || BASICS.FONT_FAMILIES.MAIN,
          marginBottom: themeData["basics.spacings.XS"]
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
  fontFamily: PropTypes.string
};
