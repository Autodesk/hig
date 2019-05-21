import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import NumericInputPresenter from "./presenters/NumericInputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

import {
  availableVariants,
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
  variant: PropTypes.oneOf(availableVariants)
};

function NumericInput(props) {
  const {
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    disabled: disabledProp,
    stylesheet,
    tagName,
    variant,
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
        >
          <NumericInputPresenter
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

NumericInput.propTypes = {
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
   * The value of the control
   */
  value: PropTypes.string,
  /**
   * The visual variant of the input
   */
  variant: PropTypes.oneOf(availableVariants)
};

NumericInput.defaultProps = {
  variant: variants.LINE
};

export default NumericInput;
