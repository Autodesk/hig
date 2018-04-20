import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./group.scss";

export default class Group extends Component {
  static propTypes = {
    /** One or more SideNav Modules */
    children: PropTypes.node
  }

  render() {
    const classes = (themeClass) => cx(
      themeClass,
      "hig__side-nav__group"
    );

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <section className={classes(themeClass)}>
            {this.props.children}
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
