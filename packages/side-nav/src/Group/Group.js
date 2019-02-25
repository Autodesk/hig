import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default class Group extends Component {
  static propTypes = {
    /** A slot for arbitrary content to render above the Modules */
    intro: PropTypes.node,
    /** One or more SideNav Modules */
    children: PropTypes.node
  };

  render() {
    const { intro, children } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(this.props, resolvedRoles);
          return (
            <section className={css(styles.group)}>
              {intro && <div className={css(styles.intro)}>{intro}</div>}
              {children}
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
