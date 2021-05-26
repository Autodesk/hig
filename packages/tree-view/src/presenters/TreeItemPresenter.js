import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import {
  CaretRightMUI,
  CaretRightSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI
} from "@hig/icons";
// import { createCustomClassNames } from "@hig/utils";
import TreeItem from "../TreeItem";
// import createChildren from "../behaviors/createChildren";
import stylesheet from "./stylesheet";
import { AVAILABLE_ROLES } from "../constants";

export default class TreeItemPresenter extends Component {
  static propTypes = {
    children: PropTypes.node,
    isPressed: PropTypes.bool,
    stylesheet: PropTypes.func
  };

  /* getChildren() {
    return createChildren(this.props.children);
  } */

  renderChild() {
    const { children } = this.props;

// should we gate from improper use allow for user error
// check to see if children is array and check for TreeItems within
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet({}, resolvedRoles);
          if (Array.isArray(children)) {
            console.log('array');
            console.log(children);
          }
          if (children && children.type === TreeItem) {
            return (
              <li className={css(styles.higTreeItem)} aria-expanded="true">
                <span><CaretRightMUI /> {this.props.label}</span>
                <div>
                  <ul role="group">
                    {this.props.children}
                  </ul>
                </div>
              </li>
            );
          } else {
            return <li className={css(styles.higTreeItem)}>{this.props.label} {this.props.children}</li>;
          }
        }}
      </ThemeContext.Consumer>
    );
  }

  render() {
    const {
      children,
      isPressed,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const {
      role,
    } = otherProps;
    const treeA11y = {
      tabIndex: `-1`,
      role: role || `treeitem`
    }

    return this.renderChild();
  }
}
