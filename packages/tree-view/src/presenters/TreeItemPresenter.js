import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import {
  CaretDownMUI,
  CaretDownSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI
} from "@hig/icons";
// import { createCustomClassNames } from "@hig/utils";
import TreeItem from "../TreeItem";
import SingleTreeNodePresenter from "./SingleTreeNodePresenter";
import SingleTreeNodeFolderPresenter from "./SingleTreeNodeFolderPresenter";
import GroupTreeNodeFolderPresenter from "./GroupTreeNodeFolderPresenter";

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

  componentDidMount() {
    // console.log('tree item presenter did mount');
  }

  renderTreeItem() {
    const { children } = this.props;
// should we gate from improper use allow for user error
// check to see if children is array and check for TreeItems within
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          // if it has a label then the children array should be of TreeItems
          if (Array.isArray(children)) {
            return <GroupTreeNodeFolderPresenter {...this.props} themeData={resolvedRoles} density={metadata.densityId} />
            // return this.buildNestedTreeItemArrays(this.props, resolvedRoles);
          }
          if (children && children.type === TreeItem) {
            // return this.buildNestedTreeItem(this.props, resolvedRoles);
            return <SingleTreeNodeFolderPresenter {...this.props} themeData={resolvedRoles} density={metadata.densityId} />
          } else {
            // return this.buildTreeItem(this.props, resolvedRoles);
            return <SingleTreeNodePresenter {...this.props} themeData={resolvedRoles} />
          }
        }}
      </ThemeContext.Consumer>
    );
  }

  render() {
    return this.renderTreeItem();
  }
}