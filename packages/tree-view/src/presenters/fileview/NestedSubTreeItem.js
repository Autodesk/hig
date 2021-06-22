import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import SubTreeViewCombined from "../SubTreeViewCombined";
import IconIndicatorPresenter from "../IconIndicatorPresenter";

import stylesheet from "../stylesheet";

export class SubTreeItem extends Component {
  static propTypes = {
    treeItem: PropTypes.shape({
      id: PropTypes.number,
      meta: PropTypes.shape({
        label: PropTypes.string,
        collapsed: PropTypes.bool,
        active: PropTypes.bool,
        icon: PropTypes.element
      })
    }),
    keyboardOpenId: PropTypes.string,
    themeData: PropTypes.shape({
      fontColor: PropTypes.string
    }),
    onClick: PropTypes.func,
    setIsCollapsed: PropTypes.func,
    setKeyboardOpenId: PropTypes.func
  };

  componentDidUpdate({ keyboardOpenId: previousKeyboardOpenId }) {
    const {
      treeItem: { id },
      keyboardOpenId
    } = this.props;

    if (keyboardOpenId === id && keyboardOpenId !== previousKeyboardOpenId) {
      this.props.treeItem.meta.collapsed = !this.props.treeItem.meta.collapsed;
      this.props.setIsCollapsed(this.props.treeItem.meta.collapsed);
      this.props.setKeyboardOpenId("");
    }
  }
  render() {
    const {
      treeItem,
      treeItem: {
        children,
        id,
        meta: { label, icon },
        payload: {
          indicator,
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          guidelines
        }
      },
      themeData,
      onClick
    } = this.props;

    const styleTreeItem = {
      children,
      id,
      label,
      indicator,
      themeData,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      guidelines,
      selected: getActiveTreeItemId() === id
    };
    const styles = stylesheet(styleTreeItem, themeData);
    return (
      <li
        className={css(styles.higTreeItemSubTreeItem)}
        id={id}
        role="treeitem"
        onClick={event => onClick(event, treeItem)}
        key={id}
      >
        <div className={css(styles.higTreeItemContentWrapper)}>
          {icon && (
            <div className={css(styles.higTreeItemIconWrapper)}>{icon}</div>
          )}
          <span>{label}</span>
        </div>
      </li>
    );
  }
}

export class NestedSubTreeItem extends Component {
  componentDidUpdate({ keyboardOpenId: previousKeyboardOpenId }) {
    const {
      treeItem: { id },
      keyboardOpenId
    } = this.props;

    if (keyboardOpenId === id && keyboardOpenId !== previousKeyboardOpenId) {
      this.props.treeItem.meta.collapsed = !this.props.treeItem.meta.collapsed;
      this.props.setIsCollapsed(this.props.treeItem.meta.collapsed);
      this.props.setKeyboardOpenId("");
    }
  }
  render() {
    const {
      treeItem,
      treeItem: {
        children,
        id,
        meta: { label, icon, collapsed },
        payload: {
          indicator,
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          guidelines
        }
      },
      density,
      themeData,
      onClick
    } = this.props;

    const styleTreeItem = {
      children,
      id,
      label,
      indicator,
      themeData,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      guidelines,
      selected: getActiveTreeItemId() === id
    };

    const styles = stylesheet(styleTreeItem, themeData);

    return (
      <li
        aria-expanded={!collapsed}
        className={css(styles.higTreeItem)}
        id={id}
        role="treeitem"
        key={id}
      >
        <div className={css(styles.higTreeItemSubTreeViewLabelWrapper)}>
          <div
            className={css(styles.higTreeItemSubTreeViewLabelContentWrapper)}
            onClick={event => onClick(event, treeItem)}
            role="presentation"
          >
            <div className={css(styles.higTreeItemIndicatorWrapper)}>
              <IconIndicatorPresenter
                collapsed={collapsed}
                density={density}
                indicator={indicator}
              />
            </div>
            {icon && (
              <div className={css(styles.higTreeItemIconWrapper)}>{icon}</div>
            )}
            <span>{label}</span>
          </div>
        </div>
        <SubTreeViewCombined {...this.props} isObject />
      </li>
    );
  }
}
