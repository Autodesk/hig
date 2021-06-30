import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createButtonEventHandlers } from "@hig/utils";

import SubTreeViewCombined from "./SubTreeViewCombined";
import IconIndicatorPresenter from "./IconIndicatorPresenter";

import stylesheet from "./stylesheet";

export default function SingleTreeNodeFolderPresenter(props) {
  const { collapsed, icon, id, indicator, label, ...otherProps } = props;
  const {
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

  return (
    <li
      aria-expanded={!collapsed}
      className={css(stylesheet(props, themeData).higTreeItem)}
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
              className={css(styles.higTreeItemSubTreeViewLabelWrapper)}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="presentation"
            >
              <div
                className={css(
                  styles.higTreeItemSubTreeViewLabelContentWrapper
                )}
              >
                <div
                  className={css(styles.higTreeItemIndicatorWrapper)}
                  onClick={handleOperatorClick}
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
      <SubTreeViewCombined {...props} isObject={false} />
    </li>
  );
}

SingleTreeNodeFolderPresenter.propTypes = {
  collapsed: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  indicator: PropTypes.string,
  label: PropTypes.node
};
