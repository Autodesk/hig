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
    /**
     * This only appears as a label when a TreeItem is the
     * child of another TreeItem. If your TreeItem has any
     * other elements as children this prop will not render
     */
    label: PropTypes.string,
    stylesheet: PropTypes.func
  };

  buildTreeItem(props, themeData, key) {
    const { children } = props;
    const styles = stylesheet(props, themeData);

    return (
      <li className={css(styles.higTreeItem)} key={key}>
        <div className={css(styles.higTreeItemContentWrapper)}>
          {children}
        </div>
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
console.log(children);
    return (
      <li className={css(styles.higTreeItem)} aria-expanded="true" key={key}>
        <span><CaretRightMUI /> {label}</span>
        <div>
          <ul role="group">
            {children.map((child, index) => {
              // if it has a label then the children array should be of TreeItems
              if (child.props && child.props.children && Array.isArray(child.props.children && label)) {
                return this.buildNestedTreeItemArrays(child.props, themeData, index);
              }
              if (child.props && child.props.children && child.props.children.type === TreeItem) {
                return this.buildNestedTreeItem(child.props, themeData, index);
              } else {
                return this.buildTreeItem(child.props, themeData, index);
              }
            })}
          </ul>
        </div>
      </li>
    );
  }

  renderChild() {
    const { children } = this.props;

// should we gate from improper use allow for user error
// check to see if children is array and check for TreeItems within
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(this.props, resolvedRoles);
          // if it has a label then the children array should be of TreeItems
          if (Array.isArray(children) && this.props.label) {
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
// console.log(this.props);
    return this.renderChild();
  }
}
