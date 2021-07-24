import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import TreeItem from "../TreeItem";
import SingleTreeNodePresenter from "./SingleTreeNodePresenter";
import SingleTreeNodeFolderPresenter from "./SingleTreeNodeFolderPresenter";

export default class TreeItemPresenter extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * This only appears as a label when a TreeItem is the
     * child of another TreeItem. If your TreeItem has any
     * other elements as children this prop will not render
     */
    label: PropTypes.node,
    stylesheet: PropTypes.func
  };

  componentDidUpdate({ keyboardOpenId: previousKeyboardOpenId }) {
    const { id, keyboardOpenId } = this.props;

    if (keyboardOpenId === id && keyboardOpenId !== previousKeyboardOpenId) {
      this.props.setIsCollapsed(!this.props.getIsCollapsed());
      this.props.setKeyboardOpenId("");
    }
  }

  renderTreeItem() {
    const { children } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          if (
            (children && children.type === TreeItem) ||
            Array.isArray(children)
          ) {
            return (
              <SingleTreeNodeFolderPresenter
                {...this.props}
                density={metadata.densityId}
                themeData={resolvedRoles}
              />
            );
          }
          return (
            <SingleTreeNodePresenter
              {...this.props}
              themeData={resolvedRoles}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  render() {
    return this.renderTreeItem();
  }
}
