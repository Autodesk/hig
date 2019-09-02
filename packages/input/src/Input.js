import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

import {
  availableTagNames,
  availableVariants,
  tagNames,
  variants
} from "./constants";

function Wrapper(props) {
  if (props.variant === variants.PLAIN) {
    return props.children;
  }

  return <InputHaloPresenter {...props} />;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  tagName: PropTypes.oneOf(availableTagNames),
  variant: PropTypes.oneOf(availableVariants)
};

function Input(props) {
  const {
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    disabled: disabledProp,
    stylesheet,
    tagName,
    variant,
    error,
    ...otherProps
  } = props;

  return (
    <ControlBehavior
      onFocus={onFocusProp}
      onBlur={onBlurProp}
      onMouseEnter={onMouseEnterProp}
      onMouseLeave={onMouseLeaveProp}
    >
      {({
        hasHover,
        onMouseEnter,
        onMouseLeave,
        hasFocus,
        onFocus,
        onBlur
      }) => (
        <Wrapper
          isDisabled={disabledProp}
          hasFocus={hasFocus}
          hasHover={hasHover}
          stylesheet={stylesheet}
          tagName={tagName}
          variant={variant}
          error={error}
          {...otherProps}
        >
          <InputPresenter
            disabled={disabledProp}
            hasFocus={hasFocus}
            hasHover={hasHover}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            stylesheet={stylesheet}
            tagName={tagName}
            variant={variant}
            {...otherProps}
          />
        </Wrapper>
      )}
    </ControlBehavior>
  );
}

Input.propTypes = {
  /**
   * The initial value of the control
   */
  defaultValue: PropTypes.string,
  /**
   * Prevents the user from interacting with the input
   */
  disabled: PropTypes.bool,
  /**
   * Fired when an element has lost focus
   */
  onBlur: PropTypes.func,
  /**
   * Fired when an element has received focus
   */
  onFocus: PropTypes.func,
  /**
   * Fired when a pointing device is moved over the element
   */
  onMouseEnter: PropTypes.func,
  /**
   * Fired when the pointer of a pointing device is moved out of an element
   */
  onMouseLeave: PropTypes.func,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Renders the HTML element that is passed in
   */
  tagName: PropTypes.oneOf(availableTagNames),
  /**
   * The value of the control
   */
  value: PropTypes.string,
  /**
   * The visual variant of the input
   */
  variant: PropTypes.oneOf(availableVariants),
  /**
   * Specify if the value of the input is wrong
   */
  error: PropTypes.bool
};

Input.defaultProps = {
  tagName: tagNames.INPUT,
  variant: variants.LINE,
  error: false
};

export default Input;
