import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default class Docked extends Component {
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

  static defaultProps = {
    onMouseLeave: () => {},
    onMouseEnter: () => {}
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
          <div
            id="surface"
            className={css(
              stylesheet(
                {
                  stylesheet: customStylesheet,
                  ...this.props
                },
                resolvedRoles
              ).docked
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {children}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
