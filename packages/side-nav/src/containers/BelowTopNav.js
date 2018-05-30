import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./below-top-nav.scss";

export default class BelowTopNav extends Component {
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

    const classes = themeClass =>
      cx(themeClass, "hig__side-nav-container--below-top-nav");

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
