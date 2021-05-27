import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default class TreeViewPresenter extends Component {
  static propTypes = {
    alternateBg: PropTypes.bool,
    children: PropTypes.node,
    guidelines: PropTypes.bool,
    stylesheet: PropTypes.func
  };

  render() {
    const {
      alternateBg,
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
              alternateBg,
              guidelines,
              stylesheet: customStylesheet
            },
            resolvedRoles
          );
          return (
            <div className={css(styles.higTreeViewWrapper)}>
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
