import React, { Component } from "react";

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
  const {
    id,
    meta: { label },
  } = treeItem;
  const styles = stylesheet(treeItem, themeData);
  return (
    <li className={css(styles.higTreeItem)} id={id} role="treeitem">
      <div className={css(styles.higTreeItemContentWrapper)}>{label}</div>
    </li>
  );
}

function NestedSubTreeItem({ treeItem, themeData }) {
  const {
    children,
    id,
    meta: { label },
    payload,
    payload: { indicator },
  } = treeItem;
  const styles = stylesheet(treeItem, themeData);
  const IconIndicator =
    indicator === "operator" ? OperatorPlusSUI : CaretRightMUI;

  return (
    <li
      aria-expanded="true"
      className={css(styles.higTreeItem)}
      id={id}
      role="treeitem"
    >
      <span>
        <IconIndicator /> {label}
      </span>
      <div>
        <ul role="group">
          {children.map((child) => {
            return child.children ? (
              <NestedSubTreeItem
                treeItem={{ ...child, payload }}
                themeData={themeData}
              />
            ) : (
              <SubTreeItem treeItem={child} themeData={themeData} />
            );
          })}
        </ul>
      </div>
    </li>
  );
}

class TreeObjectView extends Component {
  state = {
    treeNode: this.props.tree,
  };

  handleClickParent(treeNode) {
    console.log("this.props", this.props);
    console.log("treeNode Info: ", treeNode);
    this.setState({
      treeNode: {
        ...treeNode,
        meta: { ...treeNode.meta, toggled: !treeNode.meta.toggled },
      },
    });
  }

  renderProperties(treeItem) {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const { treeNode } = this.state;
          return (
            <NestedSubTreeItem treeItem={treeNode} themeData={resolvedRoles} />
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  render() {
    const { treeNode } = this.state;
    return this.renderProperties(treeNode);
  }
}

export default TreeObjectView;
