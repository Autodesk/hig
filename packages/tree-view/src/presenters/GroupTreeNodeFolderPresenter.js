import React from "react";
import { css } from "emotion";
import {
  CaretDownMUI,
  CaretDownSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI
} from "@hig/icons";

import SubTreeViewPresenter from "./SubTreeViewPresenter";
import IconIndicatorPresenter from "./IconIndicatorPresenter";

import stylesheet from "./stylesheet";

export default function GroupTreeNodeFolderPresenter(props) {
  const {
    collapsed,
    density,
    getIsCollapsed,
    icon,
    id,
    indicator,
    label,
    onClick,
    setIsCollapsed,
    themeData
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
          <IconIndicatorPresenter collapsed={collapsed} density={density} indicator={indicator} />
          {icon}
          <span>{label}</span>
        </div>
      </div>
      <SubTreeViewPresenter {...props} />
    </li>
  );
}
