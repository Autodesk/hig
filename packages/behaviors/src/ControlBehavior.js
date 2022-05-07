import React from "react";
import PropTypes from "prop-types";

import FocusBehavior from "./FocusBehavior";
import HoverBehavior from "./HoverBehavior";
import PressedBehavior from "./PressedBehavior";

const ControlBehavior = (props) => (
  <HoverBehavior
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  >
    {({ hasHover, onMouseEnter, onMouseLeave }) => (
      <FocusBehavior onFocus={props.onFocus} onBlur={props.onBlur}>
        {({ hasFocus, onFocus, onBlur }) => (
          <PressedBehavior
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            {({ isPressed, onMouseDown, onMouseUp, onPressedMouseLeave }) =>
              props.children({
                hasHover,
                hasFocus,
                isPressed,
                onFocus,
                onBlur,
                onMouseDown,
                onMouseEnter,
                onMouseLeave: onPressedMouseLeave,
                onMouseUp,
              })
            }
          </PressedBehavior>
        )}
      </FocusBehavior>
    )}
  </HoverBehavior>
);

ControlBehavior.displayName = "ControlBehavior";

ControlBehavior.propTypes = {
  children: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
};

export default ControlBehavior;
