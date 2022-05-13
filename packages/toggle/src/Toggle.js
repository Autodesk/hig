import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import ToggleBehavior from "./behaviors/ToggleBehavior";
import TogglePresenter from "./presenters/TogglePresenter";

const Toggle = (props) => {
  const {
    on: controlledOn,
    defaultOn,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const {
    className,
    onBlur,
    onChange,
    onFocus,
    onKeyUp,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  } = otherProps;

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
        <ToggleBehavior
          on={controlledOn}
          defaultOn={defaultOn}
          onChange={onChange}
          onKeyUp={onKeyUp}
        >
          {({ on, handleChange, handleKeyUp }) => (
            <TogglePresenter
              {...otherProps}
              checked={on}
              className={className}
              hasFocus={hasFocus}
              hasHover={hasHover}
              isPressed={isPressed}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyUp={handleKeyUp}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              stylesheet={customStylesheet}
            />
          )}
        </ToggleBehavior>
      )}
    </ControlBehavior>
  );
};

Toggle.displayName = "Toggle";

Toggle.propTypes = {
  /**
   * Intially turns the toggle on, but allows user action to change it
   */
  defaultOn: PropTypes.bool,
  /**
   * Turns on the toggle
   */
  on: PropTypes.bool,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
};

export default Toggle;
