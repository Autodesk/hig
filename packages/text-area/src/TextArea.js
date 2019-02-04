import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "@hig/input";

function getWebLightBorders(props, themeData) {
  const { isDisabled, hasFocus, hasHover } = props;

  if (hasFocus) {
    return themeData[`input.focus.borderBottomColor`];
  }
  if (hasHover && !isDisabled) {
    return themeData[`input.hover.borderBottomColor`];
  }
  return themeData[`input.borderColor`];
}

function stylesheetOverride(stylesheet, props, themeData, theme) {
  const borderStyles =
    props.variant === `line`
      ? `rgba(128, 128, 128, 0.2)`
      : themeData[`input.borderColor`];
  const textAreaWrapper =
    theme === `hig-light`
      ? {
          ...stylesheet.wrapper,
          borderColor: getWebLightBorders(props, themeData),
          borderBottomColor: getWebLightBorders(props, themeData)
        }
      : {
          ...stylesheet.wrapper,
          borderLeftColor: borderStyles,
          borderRightColor: borderStyles,
          borderTopColor: borderStyles
        };
  const textArea = {
    ...stylesheet.input,
    display: `block`,
    resize: `none`,
    padding: `${themeData["input.verticalPadding"]}
      ${themeData["input.boxType.horizontalPadding"]}`
  };

  return {
    ...stylesheet,
    wrapper: textAreaWrapper,
    input: textArea
  };
}

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
      <Input
        stylesheet={stylesheetOverride}
        tagName="textarea"
        variant={variant}
        {...otherProps}
      />
    );
  }
}
