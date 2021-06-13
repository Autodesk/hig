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

import stylesheet from "./stylesheet";

export default function SingleTreeNodeFolderPresenter(props) {
  const {
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
  const OperatorMinusIcon = density === 'medium-density' ? OperatorMinusSUI : OperatorMinusXsUI;
  const CaretDownIcon = density === 'medium-density' ? CaretDownMUI : CaretDownSUI;
  const IconIndicator = indicator === 'operator' ? OperatorMinusIcon : CaretDownIcon;

  return (
    <li
      aria-expanded="true"
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
    >
      <div
        className={css(styles.higTreeItemSubTreeViewLabelWrapper)}
        onClick={onClick}
      >
        <div className={css(styles.higTreeItemSubTreeViewLabelContentWrapper)}>
          <IconIndicator />
          {icon}
          <span>{label}</span>
        </div>
      </div>
      <SubTreeViewPresenter {...props} />
    </li>
  );
}
