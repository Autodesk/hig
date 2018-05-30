import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./docked.scss";

export default class Docked extends Component {
  static propTypes = {
    /** A SideNav element */
    children: PropTypes.node,
    /** Called when beginning to hover over the container */
    onMouseEnter: PropTypes.func,
    /** Called when no longer hovering over the container */
    onMouseLeave: PropTypes.func
  };

  static defaultProps = {
    onMouseLeave: () => {},
    onMouseEnter: () => {}
  };

  render() {
    const { children, onMouseLeave, onMouseEnter } = this.props;

    const classes = themeClass =>
      cx(themeClass, "hig__side-nav-container--docked");

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={classes(themeClass)}
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
