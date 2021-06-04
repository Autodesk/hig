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

function SubTreeItem(props) {
  const {
    treeItem: {
      children,
      id,
      meta: { label },
      payload: { indicator, getActiveTreeItemId, getActiveTreeItemIndex },
    },
    themeData,
  } = props;

  const styleTreeItem = {
    children,
    id,
    label,
    indicator,
    themeData,
    getActiveTreeItemId,
    getActiveTreeItemIndex,
  };
  const styles = stylesheet(styleTreeItem, themeData);
  return (
    <li className={css(styles.higTreeItem)} id={id} role="treeitem">
      <div className={css(styles.higTreeItemContentWrapper)}>{label}</div>
    </li>
  );
}

function NestedSubTreeItem(props) {
  const {
    treeItem: {
      children,
      id,
      meta: { label },
      payload,
      payload: { indicator, getActiveTreeItemId, getActiveTreeItemIndex },
    },
    themeData,
  } = props;

  const styleTreeItem = {
    children,
    id,
    label,
    indicator,
    themeData,
    getActiveTreeItemId,
    getActiveTreeItemIndex,
  };

  const styles = stylesheet(styleTreeItem, themeData);
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
              <SubTreeItem
                treeItem={{ ...child, payload }}
                themeData={themeData}
              />
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

  render() {
    const { treeNode } = this.state;
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          return (
            <NestedSubTreeItem
              treeItem={this.props.tree}
              themeData={resolvedRoles}
              stylesheet={stylesheet}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TreeObjectView;
