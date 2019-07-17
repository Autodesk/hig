import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
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
    variant: PropTypes.oneOf(variantTypes),
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
    variant: "line"
  };

  render() {
    const { variant, stylesheet, ...otherProps } = this.props;
    const { className } = otherProps;
    const textareaClassName =
      className &&
      className
        .split(" ")
        .reduce((acc, cur) => cx(acc, `${cur.trim()}-textarea`), "");

    const textareaStylesheet = (styles, props, themeData, theme) => {
      const textareaStyles = customStylesheet(styles, props, themeData, theme);
      return stylesheet
        ? stylesheet(textareaStyles, props, themeData, theme)
        : textareaStyles;
    };

    return (
      <div style={{ position: "relative" }} className={className}>
        <Input
          {...otherProps}
          className={textareaClassName}
          stylesheet={textareaStylesheet}
          tagName="textarea"
          variant={variant}
        />
      </div>
    );
  }
}
