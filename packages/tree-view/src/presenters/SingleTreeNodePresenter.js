import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createButtonEventHandlers, createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function SingleTreeNodePresenter(props) {
  const { icon, id, label, ...otherProps } = props;
  const {
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    themeData
  } = otherProps;
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

  return (
    <HoverBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {({
        hasHover,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      }) => {
        const styleProps = { ...props, hasHover };
        const styles = stylesheet(styleProps, themeData);
        return (
          <li
            className={cx([css(styles.higTreeItemSubTreeItem), className])}
            id={id}
            onClick={event => {
              handleClick(event, props);
            }}
            onKeyDown={event => {
              handleKeyDown(event, props);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="treeitem"
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

SingleTreeNodePresenter.propTypes = {
  icon: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.node
};
