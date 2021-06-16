import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default function SingleTreeNodePresenter(props) {
  const { icon, id, label, onClick, ...otherProps } = props;
  const { themeData } = otherProps;
  const styles = stylesheet(props, themeData);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li
      className={css(styles.higTreeItemSubTreeItem)}
      id={id}
      onClick={onClick}
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
  label: PropTypes.node,
  onClick: PropTypes.func
};
