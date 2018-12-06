import React, { Component } from "react";
import PropTypes from "prop-types";

import FocusBehavior from "./FocusBehavior";
import HoverBehavior from "./HoverBehavior";
import PressedBehavior from "./PressedBehavior";

class ControlBehavior extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func
  };

  render() {
    return (
      <HoverBehavior
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        {({ hasHover, onMouseEnter, onMouseLeave }) => (
          <FocusBehavior
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
          >
            {({ hasFocus, onFocus, onBlur }) => (
              <PressedBehavior
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
              >
                {({ isPressed, onMouseDown, onMouseUp }) =>
                  this.props.children({
                    hasHover,
                    hasFocus,
                    isPressed,
                    onFocus,
                    onBlur,
                    onMouseDown,
                    onMouseEnter,
                    onMouseLeave,
                    onMouseUp
                  })
                }
              </PressedBehavior>
            )}
          </FocusBehavior>
        )}
      </HoverBehavior>
    );
  }
}

export default ControlBehavior;
