import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createCustomClassNames, createButtonEventHandlers } from "@hig/utils";

import stylesheet from "../stylesheet";

export default class TreeObjectSubTreeItem extends Component {
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
        meta: { className, icon, label },
        payload: {
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getCurrentItemClicked,
          guidelines,
          indicator
        },
        onClick: userOnClick,
        ...otherTreeItemProps
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
    const higTreeItemContentWrapperClassName = createCustomClassNames(
      className,
      `hig-tree-item-content-wrapper`
    );
    const higTreeItemIconWrapperClassName = createCustomClassNames(
      className,
      `hig-tree-item-icon-wrapper`
    );
    const higTreeItemLabelWrapperClassName = createCustomClassNames(
      className,
      `hig-tree-item-label-wrapper`
    );
    const htmlProps = { ...otherTreeItemProps };
    delete htmlProps.parentId;

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
              {...htmlProps}
              className={cx([css(styles.higTreeItemSubTreeItem), className])}
              id={id}
              role="treeitem"
              onClick={event => {
                if (userOnClick) {
                  userOnClick(event);
                }
                handleClick(event, treeItem);
              }}
              onKeyDown={handleKeyDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={id}
            >
              <div
                className={cx([
                  css(styles.higTreeItemContentWrapper),
                  higTreeItemContentWrapperClassName
                ])}
              >
                {icon && (
                  <div
                    className={cx([
                      css(styles.higTreeItemIconWrapper),
                      higTreeItemIconWrapperClassName
                    ])}
                  >
                    {icon}
                  </div>
                )}
                <span
                  className={cx([
                    css(styles.higTreeItemLabelWrapper),
                    higTreeItemLabelWrapperClassName
                  ])}
                >
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
