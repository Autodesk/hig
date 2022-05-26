/* eslint-disable react/prop-types */
import React from "react";

import { ThemeContext } from "@hig/theme-context";
import TreeItemBehavior from "../../behaviors/TreeItemBehavior";

import TreeObjectNestedSubTreeItem from "./TreeObjectNestedSubTreeItem";
import TreeObjectSubTreeItem from "./TreeObjectSubTreeItem";

const TreeObjectView = (props) => {
  const {
    tree: {
      id,
      payload,
      payload: { getActiveTreeItemId, getKeyboardOpenId, setKeyboardOpenId, isControlled },
    },
    ...otherProps
  } = props;

  const isSelectedOrHilighted = (id) => {
    const activeId = getActiveTreeItemId();
    if (isControlled()) {
      return (activeId && -1 !== activeId.indexOf(id));
    }
    return activeId === id;
  }
  return (
    <TreeItemBehavior {...otherProps} id={id} payload={payload}>
      {({
        getIsCollapsed,
        handleClick,
        handleOperatorClick,
        setIsCollapsed,
      }) => (
        <ThemeContext.Consumer>
          {({ resolvedRoles, metadata }) =>
            props.tree.children ? (
              <TreeObjectNestedSubTreeItem
                density={metadata.densityId}
                highlighted={isSelectedOrHilighted(id)}
                treeItem={props.tree}
                themeData={resolvedRoles}
                onClick={handleClick}
                onOperatorClick={handleOperatorClick}
                selected={isSelectedOrHilighted(id)}
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
                highlighted={isSelectedOrHilighted(id)}
                treeItem={{ ...props.tree, payload }}
                themeData={resolvedRoles}
                onClick={handleClick}
                selected={isSelectedOrHilighted(id)}
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
