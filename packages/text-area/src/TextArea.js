import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import Input from "@hig/input";

import customStylesheet from "./customStylesheet";

const variantTypes = ["line", "box"];

const TextArea = props => {
  const { variant, stylesheet, textAreaRef, ...otherProps } = props;
  const { className } = otherProps;
  const textareaClassName =
    className &&
    className
      .split(" ")
      .reduce((acc, cur) => cx(acc, `${cur.trim()}-textarea`), "");

  const textareaStylesheet = (styles, themeData) => {
    const textareaStyles = customStylesheet(styles, props, themeData);
    return stylesheet
      ? stylesheet(textareaStyles, props, themeData)
      : textareaStyles;
  };

  return (
    <div style={{ position: "relative" }} className={className}>
      <Input
        {...otherProps}
        className={textareaClassName}
        inputRef={textAreaRef}
        stylesheet={textareaStylesheet}
        tagName="textarea"
        variant={variant}
      />
    </div>
  );
};

TextArea.displayName = "TextArea";

TextArea.propTypes = {
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
   * A callback ref that gets passed to the HTML textarea
   */
  textAreaRef: PropTypes.func,
  /**
   * The visual variant of the textarea
   */
  variant: PropTypes.oneOf(variantTypes),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func
};

TextArea.defaultProps = {
  variant: "line"
};

export default TextArea;
