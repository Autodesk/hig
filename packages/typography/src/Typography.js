import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { _VALID_COLORS, _VALID_SIZES, _VALID_TYPES } from "./_constants";
import "./typography.scss";

export default class Typography extends Component {
  static propTypes = {
    /**
     * Whether to render bold text
     */
    bold: PropTypes.bool,
    /**
     * Colors the text with one of the supported HIG colors
     */
    color: PropTypes.oneOf(_VALID_COLORS),
    /**
     * Whether to show text as disabled
     */
    disabled: PropTypes.bool,
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
    type: PropTypes.oneOf(_VALID_TYPES).isRequired,
    /**
     * Text to render styled based on provided type
     */
    text: PropTypes.string.isRequired
  };

  render() {
    const classes = cx("hig__typography", {
      [`hig__typography__${this.props.type}`]: this.props.type,
      [`hig__typography--${this.props.color}`]: this.props.color,
      [`hig__typography--${this.props.size}`]: this.props.size,
      "hig__typography--bold": this.props.bold,
      "hig__typography--disabled": this.props.disabled
    });

    /**
     * N.B.: The intent is to apply opacity to the color. Typography components currently only render text, so
     * applying opacity should have no side effects. If this component ever wraps styled content, we should reconsider
     * this mechanism, because opacity in children nodes can be magnified by this parent node.
     */
    const customStyles =
      typeof this.props.opacity === "number"
        ? { opacity: this.props.opacity }
        : {};

    return (
      <span className={classes} style={customStyles}>
        {this.props.text}
      </span>
    );
  }
}
