import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createButtonEventHandlers } from "@hig/utils";

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
    keyboardOpenId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
      keyboardOpenId,
      setIsCollapsed
    } = this.props;

    if (
      keyboardOpenId === id &&
      keyboardOpenId !== previousKeyboardOpenId &&
      setIsCollapsed
    ) {
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
          getCurrentItemClicked,
          guidelines
        }
      },
      themeData,
      level,
      onClick,
      ...otherProps
    } = this.props;
    const { onMouseEnter, onMouseLeave } = otherProps;
    const styleTreeItem = {
      children,
      id,
      label,
      level,
      highlighted: getActiveTreeItemId() === id,
      indicator,
      themeData,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      guidelines,
      selected: getCurrentItemClicked() === id
    };
    const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);

    return (
      <HoverBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {({
          hasHover,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }) => {
          const styleProps = { ...styleTreeItem, hasHover };
          const styles = stylesheet(styleProps, themeData);
          return (
            <li
              className={css(styles.higTreeItemSubTreeItem)}
              id={id}
              role="treeitem"
              onClick={event => handleClick(event, treeItem)}
              onKeyDown={handleKeyDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={id}
            >
              <div className={css(styles.higTreeItemContentWrapper)}>
                {icon && (
                  <div className={css(styles.higTreeItemIconWrapper)}>
                    {icon}
                  </div>
                )}
                <span className={css(styles.higTreeItemLabelWrapper)}>
                  {label}
                </span>
              </div>
            </li>
          );
        }}
      </HoverBehavior>
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
        meta: { label, icon },
        payload: {
          indicator,
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getCurrentItemClicked,
          guidelines
        }
      },
      collapsed,
      density,
      themeData,
      level,
      onClick,
      onOperatorClick,
      ...otherProps
    } = this.props;
    const { onMouseEnter, onMouseLeave } = otherProps;

    const styleTreeItem = {
      children,
      id,
      label,
      level,
      indicator,
      themeData,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      guidelines,
      highlighted: getActiveTreeItemId() === id,
      selected: getCurrentItemClicked() === id
    };

    return (
      <li
        aria-expanded={!collapsed}
        className={css(stylesheet(styleTreeItem, themeData).higTreeItem)}
        id={id}
        role="treeitem"
        key={id}
      >
        <HoverBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {({
            hasHover,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave
          }) => {
            const styleProps = { ...styleTreeItem, hasHover };
            const styles = stylesheet(styleProps, themeData);
            const { handleClick, handleKeyDown } = createButtonEventHandlers(
              onClick
            );
            const {
              handleClick: handleOperatorClick,
              handleKeyDown: handleOperatorKeyDown
            } = createButtonEventHandlers(onOperatorClick);

            return (
              <div className={css(styles.higTreeItemSubTreeViewLabelWrapper)}>
                <div
                  className={css(
                    styles.higTreeItemSubTreeViewLabelContentWrapper
                  )}
                  onClick={event => handleClick(event, treeItem)}
                  onKeyDown={handleKeyDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  role="presentation"
                >
                  <div
                    className={css(styles.higTreeItemIndicatorWrapper)}
                    onClick={event => handleOperatorClick(event, treeItem)}
                    onKeyDown={handleOperatorKeyDown}
                    role="button"
                    tabIndex="-1"
                  >
                    <IconIndicatorPresenter
                      collapsed={collapsed}
                      density={density}
                      indicator={indicator}
                    />
                  </div>
                  {icon && (
                    <div className={css(styles.higTreeItemIconWrapper)}>
                      {icon}
                    </div>
                  )}
                  <span className={css(styles.higTreeItemLabelWrapper)}>
                    {label}
                  </span>
                </div>
              </div>
            );
          }}
        </HoverBehavior>
        <SubTreeViewCombined {...this.props} isObject />
      </li>
    );
  }
}
