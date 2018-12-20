import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS
} from "./_constants";

import stylesheet from "./Typography.stylesheet";

export default class Typography extends Component {
  static propTypes = {
    /**
     * Sets the horizontal alignment of the text
     */
    align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
    /**
     * Text to render
     */
    children: PropTypes.node,
    /**
     * Specifies the weight (or boldness) of the font
     */
    fontWeight: PropTypes.oneOf(AVAILABLE_FONT_WEIGHTS),
    /**
     * Indicates the initial Typography style
     */
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS)
  };

  render() {
    const { align, children, fontWeight, variant, ...otherProps } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { align, fontWeight, variant },
            resolvedRoles
          );

          return (
            <span className={css(styles.typography)} {...otherProps}>
              {children}
            </span>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
