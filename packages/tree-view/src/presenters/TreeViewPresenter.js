import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default class TreeViewPresenter extends Component {
  static propTypes = {
    children: PropTypes.node,
    guidelines: PropTypes.bool,
    stylesheet: PropTypes.func
  };

  render() {
    const {
      children,
      guidelines,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              guidelines,
              stylesheet: customStylesheet
            },
            resolvedRoles
          );
          return (
            <div>
              <ul role="group" className={css(styles.higTreeView)}>
                {children}
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
