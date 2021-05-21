import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CheckmarkSUI, CheckmarkXsUI } from "@hig/icons";
// import { createCustomClassNames } from "@hig/utils";
import TreeItem from "../TreeItem";
// import createChildren from "../behaviors/createChildren";
// import stylesheet from "./stylesheet";
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

    if (children && children.type === TreeItem) {
      return (
        <li>
          <span>{this.props.label}</span>
          <ul role="group">
            {this.props.children}
          </ul>
        </li>
      );
    }
    return <li>{this.props.label} {this.props.children}</li>;
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

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          /* const styles = stylesheet(
            {
              isPressed,
              stylesheet: customStylesheet
            },
            resolvedRoles
          ); */

          return this.renderChild();
        }}
      </ThemeContext.Consumer>
    );
  }
}
