/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { css, cx } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createCustomClassNames, createButtonEventHandlers } from "@hig/utils";
// eslint-disable-next-line import/no-cycle
import SubTreeViewCombined from "../SubTreeViewCombined";
import IconIndicatorPresenter from "../IconIndicatorPresenter";

import stylesheet from "../stylesheet";

const TreeObjectNestedSubTreeItem = (props) => {
  const {
    treeItem,
    treeItem: {
      children,
      id,
      meta: { className, icon, label, expandByDoubleClick },
      payload: {
        defaultSelected,
        indicator,
        getActiveTreeItemId,
        getActiveTreeItemIndex,
        getCurrentItemClicked,
        guidelines,
        isControlled,
        selected,
      },
      onClick: userOnClick,
      onDoubleClick: userOnDoubleClick,
      ...otherTreeItemProps
    },
    collapsed,
    density,
    themeData,
    level,
    onClick,
    onOperatorClick,
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
    indicator,
    themeData,
    getActiveTreeItemId,
    getActiveTreeItemIndex,
    guidelines,
    highlighted: getActiveTreeItemId() === id,
    selected: getActiveId() === id,
  };
  const higTreeItemSubTreeViewLabelWrapperClassName = createCustomClassNames(
    className,
    `hig-tree-item-sub-tree-view-label-wrapper`
  );
  const higTreeItemSubTreeViewLabelContentWrapperClassName =
    createCustomClassNames(
      className,
      `hig-tree-item-sub-tree-view-label-content-wrapper`
    );
  const higTreeItemIndicatorWrapperClassName = createCustomClassNames(
    className,
    `hig-tree-item-indicator-wrapper`
  );
  const higTreeItemIndicatorIconClassName = createCustomClassNames(
    className,
    `hig-tree-item-indicator-icon`
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
    } = props;

    if (keyboardOpenId === id) {
      // eslint-disable-next-line no-param-reassign
      props.treeItem.meta.collapsed = !props.treeItem.meta.collapsed;
      props.setIsCollapsed(props.treeItem.meta.collapsed);
      props.setKeyboardOpenId("");
    }
  }, [props.keyboardOpenId]);

  return (
    <li
      aria-expanded={!collapsed}
      className={cx([
        css(stylesheet(styleTreeItem, themeData).higTreeItem),
        className,
      ])}
      id={id}
      role="treeitem"
      key={id}
    >
      <HoverBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {({
          hasHover,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        }) => {
          const styleProps = { ...styleTreeItem, hasHover };
          const styles = stylesheet(styleProps, themeData);
          const { handleClick, handleKeyDown } =
            createButtonEventHandlers(onClick);
          const {
            handleClick: handleOperatorClick,
            handleKeyDown: handleOperatorKeyDown,
          } = createButtonEventHandlers(onOperatorClick);

          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              {...htmlProps}
              className={cx([
                css(styles.higTreeItemSubTreeViewLabelWrapper),
                higTreeItemSubTreeViewLabelWrapperClassName,
              ])}
              onClick={(event) => {
                if (userOnClick) {
                  userOnClick(event);
                }
              }}
              onDoubleClick={(event) => {
                if (userOnDoubleClick) {
                  userOnDoubleClick(event);
                }
                if (expandByDoubleClick) {
                  handleOperatorClick(event, treeItem);
                }
              }}
            >
              <div
                className={cx([
                  css(styles.higTreeItemSubTreeViewLabelContentWrapper),
                  higTreeItemSubTreeViewLabelContentWrapperClassName,
                ])}
                onClick={(event) => {
                  handleClick(event, treeItem);
                }}
                onKeyDown={handleKeyDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                role="presentation"
              >
                <div
                  className={cx([
                    css(styles.higTreeItemIndicatorWrapper),
                    higTreeItemIndicatorWrapperClassName,
                  ])}
                  onClick={(event) => handleOperatorClick(event, treeItem)}
                  onKeyDown={handleOperatorKeyDown}
                  role="button"
                  tabIndex="-1"
                >
                  <IconIndicatorPresenter
                    className={higTreeItemIndicatorIconClassName}
                    collapsed={collapsed}
                    density={density}
                    indicator={indicator}
                  />
                </div>
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
            </div>
          );
        }}
      </HoverBehavior>
      <SubTreeViewCombined {...props} isObject />
    </li>
  );
};

TreeObjectNestedSubTreeItem.displayName = "TreeObjectNestedSubTreeItem";

export default TreeObjectNestedSubTreeItem;
