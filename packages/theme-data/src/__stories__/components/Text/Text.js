import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes";

import stylesheet from "./stylesheet";

const FONT_SIZES = {
  S: "DENSITY.FONT_SIZES.S",
  M: "DENSITY.FONT_SIZES.M",
  L: "DENSITY.FONT_SIZES.L",
  XL: "DENSITY.FONT_SIZES.XL",
  XXL: "DENSITY.FONT_SIZES.XXL"
};

const FONT_WEIGHTS = {
  REGULAR: "BASICS.FONT_WEIGHTS.REGULAR",
  MEDIUM: "BASICS.FONT_WEIGHTS.MEDIUM",
  BOLD: "BASICS.FONT_WEIGHTS.BOLD"
};

const FONT_FAMILIES = {
  MAIN: "BASICS.FONT_FAMILIES.MAIN",
  MONOSPACE: "BASICS.FONT_FAMILIES.MONOSPACE"
};

const LINE_HEIGHTS = {
  S: "BASICS.LINE_HEIGHTS.S",
  M: "BASICS.LINE_HEIGHTS.M",
  L: "BASICS.LINE_HEIGHTS.L"
};

const LAYOUTS = {
  BLOCK: "block",
  INLINE: "inline"
};

const DEFAULT_TEXT_COLOR = "DEFAULT_TEXT_COLOR";

function Text({
  children,
  fontSize,
  fontWeight,
  color,
  fontFamily,
  lineHeight,
  layout
}) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(
          {
            fontSize,
            fontWeight,
            color:
              color === DEFAULT_TEXT_COLOR
                ? themeData["COLOR_SCHEME.TEXT_COLOR"]
                : color,
            fontFamily,
            lineHeight,
            layout
          },
          themeData
        );

        return <span className={css(styles)}>{children}</span>;
      }}
    </ThemeContext.Consumer>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(Object.values(FONT_SIZES)),
  fontFamily: PropTypes.oneOf(Object.values(FONT_FAMILIES)),
  fontWeight: PropTypes.oneOf(Object.values(FONT_WEIGHTS)),
  layout: PropTypes.oneOf(Object.values(LAYOUTS)),
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHTS))
};

Text.FONT_SIZES = FONT_SIZES;
Text.FONT_WEIGHTS = FONT_WEIGHTS;
Text.FONT_FAMILIES = FONT_FAMILIES;
Text.LINE_HEIGHTS = LINE_HEIGHTS;
Text.LAYOUTS = LAYOUTS;
Text.DEFAULT_TEXT_COLOR = DEFAULT_TEXT_COLOR;

export default Text;
