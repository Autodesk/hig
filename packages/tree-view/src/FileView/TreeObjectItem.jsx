import React, { PureComponent } from "react";

import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import {
  CaretRightMUI,
  CaretRightSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI,
} from "@hig/icons";

import stylesheet from "../presenters/stylesheet";

function SubTreeItem({ treeItem, themeData }) {
  const { id, label } = treeItem;
  const styles = stylesheet(treeItem, themeData);
  const { children } = treeItem;
  return (
    <li className={css(styles.higTreeItem)} id={id} role="treeitem">
      {children.map((child) =>
        treeItem.renderFileTree(child, treeItem.payload)
      )}
    </li>
  );
}

class TreeObjectItem extends PureComponent {
  render() {
    const { children, payload } = this.props;
    console.log("children", children);
    console.log("payload", payload);
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          return (
            <SubTreeItem treeItem={this.props} themeData={resolvedRoles} />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TreeObjectItem;
