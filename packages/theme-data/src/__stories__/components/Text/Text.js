import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

const FONT_SIZES = {
  S: "density.fontSizes.small",
  M: "density.fontSizes.medium",
  L: "density.fontSizes.large",
  XL: "density.fontSizes.extraLarge",
  XXL: "density.fontSizes.extraExtraLarge"
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
  S: "basics.lineHeights.small",
  M: "basics.lineHeights.medium",
  L: "basics.lineHeights.large"
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
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            fontSize,
            fontWeight,
            color:
              color === DEFAULT_TEXT_COLOR
                ? resolvedRoles["colorScheme.text.default"]
                : color,
            fontFamily,
            lineHeight,
            layout
          },
          resolvedRoles
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
