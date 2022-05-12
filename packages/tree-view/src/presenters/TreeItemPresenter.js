import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import SingleTreeNodePresenter from "./SingleTreeNodePresenter";
import SingleTreeNodeFolderPresenter from "./SingleTreeNodeFolderPresenter";

const TreeItemPresenter = (props) => {
  const renderTreeItem = () => {
    const { children } = props;
    useEffect(() => {
      const { id, keyboardOpenId } = props;

      if (keyboardOpenId === id) {
        props.setIsCollapsed(!props.getIsCollapsed());
        props.setKeyboardOpenId("");
      }
    }, [props.keyboardOpenId]);

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          if (children || Array.isArray(children)) {
            return (
              <SingleTreeNodeFolderPresenter
                {...props}
                density={metadata.densityId}
                themeData={resolvedRoles}
              />
            );
          }
          return (
            <SingleTreeNodePresenter {...props} themeData={resolvedRoles} />
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  return renderTreeItem();
};

TreeItemPresenter.displayName = "TreeItemPresenter";

TreeItemPresenter.propTypes = {
  children: PropTypes.node,
  /**
   * This only appears as a label when a TreeItem is the
   * child of another TreeItem. If your TreeItem has any
   * other elements as children this prop will not render
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  stylesheet: PropTypes.func,
};

export default TreeItemPresenter;
