import React, { Component } from "react";
import PropTypes from "prop-types";
import Surface from "@hig/surface";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default class BelowTopNavCompact extends Component {
  static propTypes = {
    /** A SideNav element */
    children: PropTypes.node,
    /** Called when beginning to hover over the container */
    onMouseEnter: PropTypes.func,
    /** Called when no longer hovering over the container */
    onMouseLeave: PropTypes.func
  };

  render() {
    const { children, onMouseLeave, onMouseEnter } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <Surface
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={stylesheet(this.props, resolvedRoles).belowTopCompact}
          >
            {children}
          </Surface>
        )}
      </ThemeContext.Consumer>
    );
  }
}
