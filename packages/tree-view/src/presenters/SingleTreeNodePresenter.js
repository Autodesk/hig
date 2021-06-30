import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { HoverBehavior } from "@hig/behaviors";
import { createButtonEventHandlers } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function SingleTreeNodePresenter(props) {
  const { icon, id, label, ...otherProps } = props;
  const { onClick, onMouseEnter, onMouseLeave, themeData } = otherProps;
  const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);

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
            className={css(styles.higTreeItemSubTreeItem)}
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
            <div className={css(styles.higTreeItemContentWrapper)}>
              {icon && (
                <div className={css(styles.higTreeItemIconWrapper)}>{icon}</div>
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

SingleTreeNodePresenter.propTypes = {
  icon: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.node
};
