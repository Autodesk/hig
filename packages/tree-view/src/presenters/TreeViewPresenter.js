import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default class TreeViewPresenter extends Component {
  static propTypes = {
    children: PropTypes.node,
    stylesheet: PropTypes.func
  };

  render() {
    const {
      children,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet
            },
            resolvedRoles
          );
          return (
            <ul role="group" className={css(styles.higTreeView)}>
              {children}
            </ul>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
