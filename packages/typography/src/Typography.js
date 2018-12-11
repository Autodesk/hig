import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import {
  _VALID_COLORS,
  _VALID_SIZES,
  _VALID_TYPES,
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS
} from "./_constants";
import "./typography.scss";
import stylesheet from "./Typography.stylesheet";

export default class Typography extends Component {
  static propTypes = {
    /**
     * Sets the horizontal alignment of an inline box.
     */
    align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
    /**
     * Whether to render bold text
     */
    bold: PropTypes.bool,
    /**
     * Text or content to render.
     */
    children: PropTypes.node,
    /**
     * Colors the text with one of the supported HIG colors
     */
    color: PropTypes.oneOf(_VALID_COLORS),
    /**
     * Whether to show text as disabled
     */
    disabled: PropTypes.bool,
    /**
     * Specifies the weight (or boldness) of the font.
     */
    fontWeight: PropTypes.oneOf(AVAILABLE_FONT_WEIGHTS),
    /**
     * An opacity value to modify the color, between 0.0 and 1.0
     */
    opacity: PropTypes.number,
    /**
     * Sizes the text with one of the supported modifiers
     */
    size: PropTypes.oneOf(_VALID_SIZES),
    /**
     * Indicates the initial Typography style
     */
    type: PropTypes.oneOf(_VALID_TYPES),
    /**
     * Text to render styled based on provided type
     */
    text: PropTypes.string,
    /**
     * Indicates the initial Typography style
     */
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS)
  };

  classes = resolvedRoles =>
    cx(
      "hig__typography",
      {
        [`hig__typography__${this.props.type}`]: this.props.type,
        [`hig__typography--${this.props.color}`]: this.props.color,
        [`hig__typography--${this.props.size}`]: this.props.size,
        "hig__typography--bold": this.props.bold,
        "hig__typography--disabled": this.props.disabled
      },
      css(stylesheet(this.props, resolvedRoles).typography)
    );

  /**
   * N.B.: The intent is to apply opacity to the color. Typography components currently only render text, so
   * applying opacity should have no side effects. If this component ever wraps styled content, we should reconsider
   * this mechanism, because opacity in children nodes can be magnified by this parent node.
   */
  opacity = () =>
    typeof this.props.opacity === "number"
      ? { opacity: this.props.opacity }
      : {};

  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <span className={this.classes(resolvedRoles)} style={this.opacity()}>
            {this.props.text}
            {this.props.children}
          </span>
        )}
      </ThemeContext.Consumer>
    );
  }
}
