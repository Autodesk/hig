import React, { Component } from "react";
import PropTypes from "prop-types";
import Surface from "@hig/surface";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default class BelowTopNav extends Component {
  static propTypes = {
    /** A SideNav element */
    children: PropTypes.node,
    /** Called when beginning to hover over the container */
    onMouseEnter: PropTypes.func,
    /** Called when no longer hovering over the container */
    onMouseLeave: PropTypes.func,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
  };

  render() {
    const {
      children,
      onMouseLeave,
      onMouseEnter,
      stylesheet: customStylesheet
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <Surface
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={
              stylesheet(
                { stylesheet: customStylesheet, ...this.props },
                resolvedRoles
              ).belowTop
            }
          >
            {children}
          </Surface>
        )}
      </ThemeContext.Consumer>
    );
  }
}
