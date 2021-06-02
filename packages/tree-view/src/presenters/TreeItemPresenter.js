import React, { Children, Component } from "react";
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

function createSubTreeItems(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { key, props = {} } = child;

    result.push({ key, props });

    return result;
  }, []);
}

function SubTreeItem(props) {
  const { children, themeData } = props;
  const styles = stylesheet(props, themeData);

  return (
    <li className={css(styles.higTreeItem)}>
      <div className={css(styles.higTreeItemContentWrapper)}>
        {children}
      </div>
    </li>
  );
}

function NestedSubTreeItem(props) {
  const { children, label, themeData } = props;
  const styles = stylesheet(props, themeData);

  return (
    <li className={css(styles.higTreeItem)} aria-expanded="true">
      <span><CaretRightMUI /> {label}</span>
      <div>
        <ul role="group">
          {children}
        </ul>
      </div>
    </li>
  );
}

function NestedSubTreeItemGroup(props) {
  const { children, indicator, label, themeData } = props;
  const styles = stylesheet(props, themeData);
  console.log('nested sub tree');
  // console.log(props);
  return (
    <li className={css(styles.higTreeItem)} aria-expanded="true">
      <span><CaretRightMUI /> {label}</span>
      <div>
        <ul role="group">
          {children.map((child, index) => {
            console.log(child);
            console.log(indicator);
            // if it has a label then the children array should be of TreeItems
            if (child.props
              && child.props.children
              && Array.isArray(child.props.children)
              && child.props.children[0].type === TreeItem
              && label
            ) {
              return <NestedSubTreeItemGroup {...child.props} indicator={indicator} themeData={themeData} />
              // return this.buildNestedTreeItemArrays(child.props, themeData, index);
            }
            if (child.props && child.props.children && child.props.children.type === TreeItem) {
              return <NestedSubTreeItem {...child.props} indicator={indicator} themeData={themeData} />
              // return this.buildNestedTreeItem(child.props, themeData, index);
            } else {
              return <SubTreeItem {...child.props} indicator={indicator} themeData={themeData} />
              // return this.buildTreeItem(child.props, themeData, index);
            }
          })}
        </ul>
      </div>
    </li>
  );
}

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

  /* getSubTreeItems() {
    return createSubTreeItems(this.props.children);
  } */

  /* renderSubTreeItem = ({ key, props }) => {
    const {
      indicator
    } = this.props;
    const payload = {
      ...props,
      indicator,
      key
    };

    return <TreeItem {...payload} />;
  }; */

  /* renderSubTreeItems() {
    return this.getSubTreeItems().map(this.renderTreeItem);
  } */

  renderTreeItem() {
    const { children, indicator } = this.props;
// console.log('renderTreeItem');
// console.log(children);

    // console.log(children);
// should we gate from improper use allow for user error
// check to see if children is array and check for TreeItems within
    // console.log(this.props.indicator);
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          // if it has a label then the children array should be of TreeItems
          if (Array.isArray(children) && this.props.label) {
            return <NestedSubTreeItemGroup {...this.props} themeData={resolvedRoles} />
            // return this.buildNestedTreeItemArrays(this.props, resolvedRoles);
          }
          if (children && children.type === TreeItem) {
            // return this.buildNestedTreeItem(this.props, resolvedRoles);
            return <NestedSubTreeItem {...this.props} themeData={resolvedRoles} />
          } else {
            // return this.buildTreeItem(this.props, resolvedRoles);
            return <SubTreeItem {...this.props} themeData={resolvedRoles} />
          }
        }}
      </ThemeContext.Consumer>
    );
  }

  render() {
    const {
      children,
      indicator,
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
// console.log('tree item presenter');

// console.log(this.props.indicator);
    return this.renderTreeItem();
  }
}
