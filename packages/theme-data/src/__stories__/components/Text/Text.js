import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes";

import stylesheet from "./stylesheet";

const FONT_SIZES = {
  S: "density.fontSizes.S",
  M: "density.fontSizes.M",
  L: "density.fontSizes.L",
  XL: "density.fontSizes.XL",
  XXL: "density.fontSizes.XXL"
};

const FONT_WEIGHTS = {
  REGULAR: "basics.fontWeights.regular",
  MEDIUM: "basics.fontWeights.medium",
  BOLD: "basics.fontWeights.bold"
};

const FONT_FAMILIES = {
  MAIN: "basics.fontFamilies.main",
  MONOSPACE: "basics.fontFamilies.monospace"
};

const LINE_HEIGHTS = {
  S: "basics.lineHeights.S",
  M: "basics.lineHeights.M",
  L: "basics.lineHeights.L"
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
                ? themeData["colorScheme.textColor"]
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
