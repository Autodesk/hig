import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { createButtonEventHandlers } from "@hig/utils";

import SubTreeViewCombined from "./SubTreeViewCombined";
import IconIndicatorPresenter from "./IconIndicatorPresenter";

import stylesheet from "./stylesheet";

export default function SingleTreeNodeFolderPresenter(props) {
  const { collapsed, icon, id, indicator, label, ...otherProps } = props;
  const { density, onClick, themeData } = otherProps;
  const styles = stylesheet(props, themeData);
  const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);

  return (
    <li
      aria-expanded={!collapsed}
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
    >
      <div
        className={css(styles.higTreeItemSubTreeViewLabelWrapper)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="presentation"
      >
        <div className={css(styles.higTreeItemSubTreeViewLabelContentWrapper)}>
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
