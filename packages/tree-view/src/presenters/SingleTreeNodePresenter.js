import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { createButtonEventHandlers } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function SingleTreeNodePresenter(props) {
  const { icon, id, label, ...otherProps } = props;
  const { onClick, themeData } = otherProps;
  const styles = stylesheet(props, themeData);
  const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);

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
      role="treeitem"
    >
      <div className={css(styles.higTreeItemContentWrapper)}>
        {icon}
        {label}
      </div>
    </li>
  );
}

SingleTreeNodePresenter.propTypes = {
  icon: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.node
};
