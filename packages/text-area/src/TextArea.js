import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "@hig/input";

import customStylesheet from "./customStylesheet";

const variantTypes = ["line", "box"];

export default class TextArea extends Component {
  static propTypes = {
    onBlur: PropTypes.func,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus onto the field
     */
    onFocus: PropTypes.func,
    /**
     * Called as user changes the value of the field
     */
    onInput: PropTypes.func,
    /**
     * The visual variant of the textarea
     */
    variant: PropTypes.oneOf(variantTypes)
  };

  static defaultProps = {
    variant: "line"
  };

  render() {
    const { variant, ...otherProps } = this.props;

    return (
      <div style={{ position: "relative" }}>
        <Input
          stylesheet={customStylesheet}
          tagName="textarea"
          variant={variant}
          {...otherProps}
        />
      </div>
    );
  }
}
