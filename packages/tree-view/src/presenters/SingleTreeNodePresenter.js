import React from "react";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default function SingleTreeNodePresenter(props) {
  const { icon, id, label, onClick, themeData } = props;
  const styles = stylesheet(props, themeData);

  return (
    <li
      className={css(styles.higTreeItemSubTreeItem)}
      id={id}
      onClick={event => { onClick(event, props) }}
      role="treeitem"
    >
      <div className={css(styles.higTreeItemContentWrapper)}>
          {icon}
          {label}
      </div>
    </li>
  );
}
