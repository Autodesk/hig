import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createButtonEventHandlers, createCustomClassNames } from "@hig/utils";

import SubTreeViewCombined from "./SubTreeViewCombined";
import IconIndicatorPresenter from "./IconIndicatorPresenter";

import stylesheet from "./stylesheet";

export default function SingleTreeNodeFolderPresenter(props) {
  const {
    collapsed,
    icon,
    id,
    indicator,
    itemRef,
    label,
    ...otherProps
  } = props;
  const {
    className,
    density,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onOperatorClick,
    themeData
  } = otherProps;
  const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);
  const {
    handleClick: handleOperatorClick,
    handleKeyDown: handleOperatorKeyDown
  } = createButtonEventHandlers(onOperatorClick);
  const higTreeItemSubTreeViewLabelWrapperClassName = createCustomClassNames(
    className,
    `hig-tree-item-sub-tree-view-label-wrapper`
  );
  const higTreeItemSubTreeViewLabelContentWrapperClassName = createCustomClassNames(
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
  const payload = { ...otherProps };

  const renderLabel = () => {
    if (typeof label === "function") {
      return <div>{label(props)}</div>;
    }
    return label;
  };

  delete payload.density;
  delete payload.defaultSelected;
  delete payload.getActiveTreeItemId;
  delete payload.getActiveTreeItemIndex;
  delete payload.getCurrentItemClicked;
  delete payload.getIsCollapsed;
  delete payload.getKeyboardOpenId;
  delete payload.getTreeItemArray;
  delete payload.guidelines;
  delete payload.highlighted;
  delete payload.isControlled;
  delete payload.keyboardOpenId;
  delete payload.level;
  delete payload.onOperatorClick;
  delete payload.setActiveTreeItemId;
  delete payload.setActiveTreeItemIndex;
  delete payload.setIsCollapsed;
  delete payload.setKeyboardOpenId;
  delete payload.stylesheet;
  delete payload.themeData;

  return (
    <li
      aria-expanded={!collapsed}
      className={cx([css(stylesheet(props, themeData).higTreeItem), className])}
      id={id}
      role="treeitem"
    >
      <HoverBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {({
          hasHover,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }) => {
          const styleProps = { ...props, hasHover };
          const styles = stylesheet(styleProps, themeData);
          return (
            <div
              {...payload}
              className={cx([
                css(styles.higTreeItemSubTreeViewLabelWrapper),
                higTreeItemSubTreeViewLabelWrapperClassName
              ])}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="presentation"
              ref={itemRef}
            >
              <div
                className={cx([
                  css(styles.higTreeItemSubTreeViewLabelContentWrapper),
                  higTreeItemSubTreeViewLabelContentWrapperClassName
                ])}
              >
                <div
                  className={cx([
                    css(styles.higTreeItemIndicatorWrapper),
                    higTreeItemIndicatorWrapperClassName
                  ])}
                  onClick={handleOperatorClick}
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
                  {renderLabel()}
                </span>
              </div>
            </div>
          );
        }}
      </HoverBehavior>
      <SubTreeViewCombined {...props} isObject={false} />
    </li>
  );
}

SingleTreeNodeFolderPresenter.propTypes = {
  collapsed: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  indicator: PropTypes.string,
  itemRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.arrayOf(PropTypes.any) })
  ]),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  highlighted: PropTypes.bool
};
