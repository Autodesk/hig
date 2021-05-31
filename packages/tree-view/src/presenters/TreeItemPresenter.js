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

  buildTreeItem(props, themeData, key) {
    const { children, label } = props;
    const styles = stylesheet(props, themeData);

    return (
      <li className={css(styles.higTreeItem)} key={key}>
        {label} {children}
      </li>
    );
  }

  buildNestedTreeItem(props, themeData, key) {
    const { children, label } = props;
    const styles = stylesheet(props, themeData);

    return (
      <li className={css(styles.higTreeItem)} aria-expanded="true" key={key}>
        <span><CaretRightMUI /> {label}</span>
        <div>
          <ul role="group">
            {children}
          </ul>
        </div>
      </li>
    );
  }

  buildNestedTreeItemArrays(props, themeData, key) {
    const { children, label } = props;
    const styles = stylesheet(props, themeData);

    return (
      <li className={css(styles.higTreeItem)} aria-expanded="true" key={key}>
        <span><CaretRightMUI /> {label}</span>
        <div>
          <ul>
            {children.map((child, index) => {
              if (child.props && child.props.children && Array.isArray(child.props.children)) {
                // this.renderChild();
                return this.buildNestedTreeItemArrays(child.props, themeData, index);
              }
              if (child.props && child.props.children && child.props.children.type === TreeItem) {
                // childrenArray.push(this.buildNestedTreeItem(child.props.children.props, resolvedRoles));
                return this.buildNestedTreeItem(child.props, themeData, index);
              } else {
                // childrenArray.push(this.buildTreeItem(child.props, resolvedRoles));
                return this.buildTreeItem(child.props, themeData, index);
              }
            })}
          </ul>
        </div>
      </li>
    );
  }

  renderChild() {
    const { children, label } = this.props;

// should we gate from improper use allow for user error
// check to see if children is array and check for TreeItems within
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(this.props, resolvedRoles);
          if (Array.isArray(children)) {
            return this.buildNestedTreeItemArrays(this.props, resolvedRoles);
          }
          if (children && children.type === TreeItem) {
            return this.buildNestedTreeItem(this.props, resolvedRoles);
          } else {
            return this.buildTreeItem(this.props, resolvedRoles);
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
