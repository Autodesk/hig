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
    children: PropTypes.node,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
  };

  render() {
    const {
      intro,
      children,
      stylesheet: customStylesheet
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet,
              ...this.props
            },
            resolvedRoles
          );
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
