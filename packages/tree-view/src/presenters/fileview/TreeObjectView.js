import React, { Component } from "react";

import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";
import TreeItemBehavior from "../../behaviors/TreeItemBehavior";

import stylesheet from "../stylesheet";

import { NestedSubTreeItem } from "./NestedSubTreeItem";

class TreeObjectView extends Component {
  render() {
    const {
      tree: {
        id,
        payload,
        payload: { getActiveTreeItemId, getKeyboardOpenId, setKeyboardOpenId },
        meta: { collapsed },
      },
      ...otherProps
    } = this.props;
    const { onFocus, onMouseDown, onMouseLeave, onMouseUp } = otherProps;

    return (
      <TreeItemBehavior
        {...otherProps}
        id={id}
        payload={payload}
        collapsed={collapsed}
        defaultCollapsed={true}
      >
        {({
          getIsCollapsed,
          handleClick,
          handleMouseEnter,
          handleMouseLeave,
          setIsCollapsed,
        }) => (
          <ThemeContext.Consumer>
            {({ resolvedRoles, metadata }) => {
              return (
                <NestedSubTreeItem
                  density={metadata.densityId}
                  treeItem={this.props.tree}
                  themeData={resolvedRoles}
                  onClick={handleClick}
                  onFocus={onFocus}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  selected={getActiveTreeItemId() === id}
                  stylesheet={stylesheet}
                  collapsed={getIsCollapsed()}
                  getIsCollapsed={getIsCollapsed}
                  getKeyboardOpenId={getKeyboardOpenId}
                  keyboardOpenId={getKeyboardOpenId()}
                  setIsCollapsed={setIsCollapsed}
                  setKeyboardOpenId={setKeyboardOpenId}
                />
              );
            }}
          </ThemeContext.Consumer>
        )}
      </TreeItemBehavior>
    );
  }
}

export default TreeObjectView;
