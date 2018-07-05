import React, { Component } from "react";
import PropTypes from "prop-types";

import FocusBehavior from "./behaviors/FocusBehavior";
import HoverBehavior from "./behaviors/HoverBehavior";

class InputBehavior extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
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
            {({ hasFocus, onFocus, onBlur }) =>
              this.props.children({
                hasHover,
                hasFocus,
                onFocus,
                onBlur,
                onMouseEnter,
                onMouseLeave
              })
            }
          </FocusBehavior>
        )}
      </HoverBehavior>
    );
  }
}

export default InputBehavior;
