import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./below-top-nav.scss";

export default class BelowTopNav extends Component {
  static propTypes = {
    /** A SideNav element */
    children: PropTypes.node
  };

  render() {
    const classes = themeClass =>
      cx(themeClass, "hig__side-nav-container--below-top-nav");

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={classes(themeClass)}>{this.props.children}</div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
