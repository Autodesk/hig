import React from "react";
import { css } from "emotion";

import SubTreeViewCombined from "../FileView/SubTreeViewCombined";
import IconIndicatorPresenter from "./IconIndicatorPresenter";

import stylesheet from "./stylesheet";

export default function GroupTreeNodeFolderPresenter(props) {
  const {
    collapsed,
    density,
    icon,
    id,
    indicator,
    label,
    onClick,
    themeData,
  } = props;
  const styles = stylesheet(props, themeData);

  return (
    <li
      aria-expanded={!collapsed}
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
    >
      <div
        className={css(styles.higTreeItemSubTreeViewLabelWrapper)}
        onClick={onClick}
      >
        <div className={css(styles.higTreeItemSubTreeViewLabelContentWrapper)}>
          <IconIndicatorPresenter
            collapsed={collapsed}
            density={density}
            indicator={indicator}
          />
          {icon}
          <span>{label}</span>
        </div>
      </div>
      <SubTreeViewCombined {...props} isObject={false} />
    </li>
  );
}
