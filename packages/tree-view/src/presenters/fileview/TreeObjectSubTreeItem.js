/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createCustomClassNames, createButtonEventHandlers } from "@hig/utils";

import stylesheet from "../stylesheet";

const TreeObjectSubTreeItem = (props) => {
  const {
    treeItem,
    treeItem: {
      children,
      id,
      meta: { className, icon, label },
      payload: {
        defaultSelected,
        getActiveTreeItemId,
        getActiveTreeItemIndex,
        getCurrentItemClicked,
        guidelines,
        indicator,
        isControlled,
        selected,
      },
      onClick: userOnClick,
      ...otherTreeItemProps
    },
    themeData,
    level,
    onClick,
    ...otherProps
  } = props;
  const { onMouseEnter, onMouseLeave } = otherProps;
  const getActiveId = () => {
    if (isControlled()) {
      return selected;
    }
    return getCurrentItemClicked() || defaultSelected;
  };
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
    selectedEffect: getActiveId() === id,
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

  useEffect(() => {
    const {
      // eslint-disable-next-line no-shadow
      treeItem: { id },
      keyboardOpenId,
      setIsCollapsed,
    } = props;

    if (keyboardOpenId === id && setIsCollapsed) {
      // eslint-disable-next-line no-param-reassign
      props.treeItem.meta.collapsed = !props.treeItem.meta.collapsed;
      props.setIsCollapsed(props.treeItem.meta.collapsed);
      props.setKeyboardOpenId("");
    }
  }, [props.keyboardOpenId]);

  return (
    <HoverBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {({
        hasHover,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }) => {
        const styleProps = { ...styleTreeItem, hasHover };
        const styles = stylesheet(styleProps, themeData);
        return (
          <li
            {...htmlProps}
            className={cx([css(styles.higTreeItemSubTreeItem), className])}
            id={id}
            role="treeitem"
            onClick={(event) => {
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
                higTreeItemContentWrapperClassName,
              ])}
            >
              {icon && (
                <div
                  className={cx([
                    css(styles.higTreeItemIconWrapper),
                    higTreeItemIconWrapperClassName,
                  ])}
                >
                  {icon}
                </div>
              )}
              <span
                className={cx([
                  css(styles.higTreeItemLabelWrapper),
                  higTreeItemLabelWrapperClassName,
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
};

TreeObjectSubTreeItem.displayName = "TreeObjectSubTreeItem";

TreeObjectSubTreeItem.propTypes = {
  treeItem: PropTypes.shape({
    id: PropTypes.number,
    meta: PropTypes.shape({
      active: PropTypes.bool,
      collapsed: PropTypes.bool,
      expandByDoubleClick: PropTypes.bool,
      icon: PropTypes.node,
      label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    }),
  }),
  keyboardOpenId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  themeData: PropTypes.shape({
    fontColor: PropTypes.string,
  }),
  onClick: PropTypes.func,
  setIsCollapsed: PropTypes.func,
  setKeyboardOpenId: PropTypes.func,
};

export default TreeObjectSubTreeItem;
