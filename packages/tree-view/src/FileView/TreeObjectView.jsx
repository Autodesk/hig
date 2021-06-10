import React, { Component } from "react";

import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import TreeItemBehaviorRR from "../behaviors/TreeItemBehaviorRR";

import {
  CaretRightMUI,
  CaretRightSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI,
} from "@hig/icons";

import stylesheet from "../presenters/stylesheet";

function SubTreeItem(props) {
  const {
    treeItem,
    treeItem: {
      children,
      id,
      meta: { label },
      payload: { indicator, getActiveTreeItemId, getActiveTreeItemIndex },
    },
    themeData,
    onClick,
  } = props;

  const styleTreeItem = {
    children,
    id,
    label,
    indicator,
    themeData,
    getActiveTreeItemId,
    getActiveTreeItemIndex,
  };
  const styles = stylesheet(styleTreeItem, themeData);
  return (
    <li
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
      onClick={(event) => onClick(event, treeItem)}
    >
      <div className={css(styles.higTreeItemContentWrapper)}>{label}</div>
    </li>
  );
}

function NestedSubTreeItem(props) {
  const {
    treeItem,
    treeItem: {
      children,
      id,
      meta: { label },
      payload,
      payload: { indicator, getActiveTreeItemId, getActiveTreeItemIndex },
    },
    themeData,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const styleTreeItem = {
    children,
    id,
    label,
    indicator,
    themeData,
    getActiveTreeItemId,
    getActiveTreeItemIndex,
  };

  const styles = stylesheet(styleTreeItem, themeData);
  const IconIndicator =
    indicator === "operator" ? OperatorPlusSUI : CaretRightMUI;

  return (
    <li
      aria-expanded="true"
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
    >
      <span onClick={(event) => onClick(event, treeItem)}>
        <IconIndicator /> {label}
      </span>
      <div>
        <ul role="group">
          {children.map((child) => {
            return child.children ? (
              <NestedSubTreeItem
                treeItem={{ ...child, payload }}
                themeData={themeData}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                selected={getActiveTreeItemId() === id}
              />
            ) : (
              <SubTreeItem
                treeItem={{ ...child, payload }}
                themeData={themeData}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                selected={getActiveTreeItemId() === id}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
}

class TreeObjectView extends Component {
  render() {
    const {
      tree: {
        id,
        payload,
        payload: { getActiveTreeItemId },
      },
      ...otherProps
    } = this.props;
    const { onFocus, onMouseDown, onMouseLeave, onMouseUp } = otherProps;
    const TreeItemBehavior = TreeItemBehaviorRR;
    return (
      <TreeItemBehavior {...otherProps} id={id} payload={payload}>
        {({ handleClick, handleMouseEnter, handleMouseLeave }) => (
          <ThemeContext.Consumer>
            {({ resolvedRoles, metadata }) => {
              return (
                <NestedSubTreeItem
                  treeItem={this.props.tree}
                  themeData={resolvedRoles}
                  onClick={handleClick}
                  onFocus={onFocus}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  selected={getActiveTreeItemId() === id}
                  stylesheet={stylesheet}
                />
              );
            }}
          </ThemeContext.Consumer>
        )}
      </TreeItemBehavior>
    );
  }
}

export default TreeObjectView;
