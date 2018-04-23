import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./docked.scss";

export default class Docked extends Component {
  static propTypes = {
    /** A SideNav element */
    children: PropTypes.node
  };

  render() {
    const classes = themeClass =>
      cx(themeClass, "hig__side-nav-container--docked");

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={classes(themeClass)}>{this.props.children}</div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
