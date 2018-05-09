import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./group.scss";

export default class Group extends Component {
  static propTypes = {
    /** A slot for arbitrary content to render above the Modules */
    intro: PropTypes.node,
    /** One or more SideNav Modules */
    children: PropTypes.node
  };

  render() {
    const { intro, children } = this.props;
    const classes = themeClass => cx(themeClass, "hig__side-nav__group");

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <section className={classes(themeClass)}>
            {intro && (
              <div className="hig__side-nav__group__intro">{intro}</div>
            )}
            {children}
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
