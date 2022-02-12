/* eslint-disable react/prop-types */
import React from "react";

import { ThemeContext } from "@hig/theme-context";
import TreeItemBehavior from "../../behaviors/TreeItemBehavior";

import TreeObjectNestedSubTreeItem from "./TreeObjectNestedSubTreeItem";
import TreeObjectSubTreeItem from "./TreeObjectSubTreeItem";

const TreeObjectView = props => {
  const {
    tree: {
      id,
      payload,
      payload: { getActiveTreeItemId, getKeyboardOpenId, setKeyboardOpenId }
    },
    ...otherProps
  } = props;

  return (
    <TreeItemBehavior {...otherProps} id={id} payload={payload}>
      {({
        getIsCollapsed,
        handleClick,
        handleOperatorClick,
        setIsCollapsed
      }) => (
        <ThemeContext.Consumer>
          {({ resolvedRoles, metadata }) =>
            props.tree.children ? (
              <TreeObjectNestedSubTreeItem
                density={metadata.densityId}
                highlighted={getActiveTreeItemId() === id}
                treeItem={props.tree}
                themeData={resolvedRoles}
                onClick={handleClick}
                onOperatorClick={handleOperatorClick}
                selected={getActiveTreeItemId() === id}
                collapsed={getIsCollapsed()}
                getIsCollapsed={getIsCollapsed}
                getKeyboardOpenId={getKeyboardOpenId}
                keyboardOpenId={getKeyboardOpenId()}
                setIsCollapsed={setIsCollapsed}
                setKeyboardOpenId={setKeyboardOpenId}
                level={0}
              />
            ) : (
              <TreeObjectSubTreeItem
                density={metadata.densityId}
                highlighted={getActiveTreeItemId() === id}
                treeItem={{ ...props.tree, payload }}
                themeData={resolvedRoles}
                onClick={handleClick}
                selected={getActiveTreeItemId() === id}
                collapsed={getIsCollapsed()}
                getKeyboardOpenId={getKeyboardOpenId}
                keyboardOpenId={getKeyboardOpenId()}
                setKeyboardOpenId={setKeyboardOpenId}
                level={0}
              />
            )
          }
        </ThemeContext.Consumer>
      )}
    </TreeItemBehavior>
  );
};

TreeObjectView.displayName = "TreeObjectView";

export default TreeObjectView;
