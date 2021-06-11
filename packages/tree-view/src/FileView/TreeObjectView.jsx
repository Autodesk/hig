import React, { Component } from "react";

import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import TreeItemBehavior from "../behaviors/TreeItemBehavior";

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
      icon,
      id,
      meta: { label },
      payload: { indicator, getActiveTreeItemId, getActiveTreeItemIndex, guidelines },
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
    guidelines,
    selected: getActiveTreeItemId() === id,
  };
  const styles = stylesheet(styleTreeItem, themeData);
  return (
    <li
      className={css(styles.higTreeItemSubTreeItem)}
      id={id}
      role="treeitem"
      onClick={(event) => onClick(event, treeItem)}
    >
      <div className={css(styles.higTreeItemContentWrapper)}>
        {icon}
        {label}
      </div>
    </li>
  );
}

function NestedSubTreeItem(props) {
  const {
    treeItem,
    treeItem: {
      children,
      icon,
      id,
      meta: { label },
      payload,
      payload: { indicator, getActiveTreeItemId, getActiveTreeItemIndex, guidelines },
    },
    density,
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
    guidelines,
    selected: getActiveTreeItemId() === id,
  };

  const styles = stylesheet(styleTreeItem, themeData);
  const OperatorPlusIcon = density === 'medium-density' ? OperatorPlusSUI : OperatorPlusXsUI;
  const CaretRightIcon = density === 'medium-density' ? CaretRightMUI : CaretRightSUI;
  const IconIndicator = indicator === 'operator' ? OperatorPlusIcon : CaretRightIcon;
  return (
    <li
      aria-expanded="true"
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
    >
      <div className={css(styles.higTreeItemSubTreeViewLabelWrapper)}>
        <div
          className={css(styles.higTreeItemSubTreeViewLabelContentWrapper)}
          onClick={(event) => onClick(event, treeItem)}
        >
          <IconIndicator />
          {icon}
          <span>{label}</span>
        </div>
      </div>
      <div className={css(styles.higTreeItemSubTreeViewWrapper)}>
        <ul className={css(styles.higTreeItemSubTreeView)} role="group">
        {children.map((child) => {
          return child.children ? (
            <NestedSubTreeItem
              treeItem={{ ...child, payload }}
              themeData={themeData}
              density={density}
              onClick={onClick}
              onFocus={onFocus}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ) : (
            <SubTreeItem
              treeItem={{ ...child, payload }}
              themeData={themeData}
              onClick={onClick}
              onFocus={onFocus}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
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

    return (
      <TreeItemBehavior {...otherProps} id={id} payload={payload}>
        {({ handleClick, handleMouseEnter, handleMouseLeave }) => (
          <ThemeContext.Consumer>
            {({ resolvedRoles, metadata }) => {
              return (
                <NestedSubTreeItem
                  density={metadata.densityId}
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
