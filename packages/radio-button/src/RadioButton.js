import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@weave-design/behaviors";

import RadioButtonPresenter from "./presenters/RadioButtonPresenter";

export default function RadioButton(props) {
  const {
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    stylesheet,
    ...otherProps
  } = props;

  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {({
        hasFocus,
        hasHover,
        isPressed,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
      }) => (
        <RadioButtonPresenter
          hasFocus={hasFocus}
          hasHover={hasHover}
          isPressed={isPressed}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          stylesheet={stylesheet}
          {...otherProps}
        />
      )}
    </ControlBehavior>
  );
}

RadioButton.propTypes = {
  /**
   * Triggers blur when focus is moved away from icon
   */
  onBlur: PropTypes.func,
  /**
   * Triggers when focus is moved to button
   */
  onFocus: PropTypes.func,
  /**
   * Triggers when the user's mouse is pressed over the button
   */
  onMouseDown: PropTypes.func,
  /**
   * Triggers when the user's mouse is over the button
   */
  onMouseEnter: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer over the button
   */
  onMouseLeave: PropTypes.func,
  /**
   * Triggers when the user's mouse is no longer pressed over the button
   */
  onMouseUp: PropTypes.func,
  /**
   *  Function to modify the component's styles
   * */
  stylesheet: PropTypes.func,
};
