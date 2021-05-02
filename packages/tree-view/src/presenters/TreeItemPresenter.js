import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CheckmarkSUI, CheckmarkXsUI } from "@hig/icons";
// import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { AVAILABLE_ROLES } from "../constants";

export default class TreeItemPresenter extends Component {
  static propTypes = {
    asset: PropTypes.node,
    checkmark: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    highlighted: PropTypes.bool,
    id: PropTypes.string,
    isPressed: PropTypes.bool,
    role: PropTypes.oneOf(AVAILABLE_ROLES),
    selected: PropTypes.bool,
    shortcut: PropTypes.node,
    stylesheet: PropTypes.func
  };

  render() {
    const {
      children,
      isPressed,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              isPressed,
              stylesheet: customStylesheet
            },
            resolvedRoles
          );

          return (
            <li>
              <div>
                {children}
              </div>
            </li>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
