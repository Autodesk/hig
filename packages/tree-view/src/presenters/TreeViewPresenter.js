import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import TreeObjectView from "../FileView/TreeObjectView";
import TreeItem from "../TreeItem";

import stylesheet from "./stylesheet";

const objectArray = [];

function createTreeItems(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { type, key, props = {} } = child;

    if (type === TreeItem) {
      result.push({ key, props });
    }

    return result;
  }, []);
}

function buildTreeItemIdArray(list, isTreeNode) {
  const ids = [];

  list.map((item) => {
    ids.push(isTreeNode ? Number(item.id) : item.id);
  });

  return ids;
}

export default class TreeViewPresenterObject extends Component {
  static propTypes = {
    alternateBg: PropTypes.bool,
    children: PropTypes.node,
    getActiveTreeItemIndex: PropTypes.func,
    guidelines: PropTypes.bool,
    indicator: PropTypes.string,
    selected: PropTypes.bool,
    setTreeViewRef: PropTypes.func,
    stylesheet: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.treeNode) {
      this.getTreeItemArray(this.props.treeNode);
      this.props.setTreeItemArray(objectArray);
    }
  }

  componentDidUpdate() {
    if (this.props.treeNode) {
      const domNodeList = this.props.treeViewRef.querySelectorAll("li");

      const treeItemArrayControl =
        this.props.getTreeItemArray().length !== domNodeList.length
          ? buildTreeItemIdArray(Array.prototype.slice.call(domNodeList), true)
          : this.props.getTreeItemArray();

      if (this.props.getTreeItemArray().length !== domNodeList.length) {
        this.props.setTreeItemArray(treeItemArrayControl);
      }
    } else {
      const currentTreeArray = this.props.getTreeItemArray();
      const newTreeArray = buildTreeItemIdArray(
        Array.prototype.slice.call(
          this.props.treeViewRef.querySelectorAll("li")
        ),
        false
      );

      if (JSON.stringify(newTreeArray) !== JSON.stringify(currentTreeArray)) {
        this.props.setTreeItemArray(
          buildTreeItemIdArray(
            Array.prototype.slice.call(
              this.props.treeViewRef.querySelectorAll("li")
            ),
            false
          )
        );
      }
      if (!currentTreeArray) {
        this.props.setTreeItemArray(newTreeArray);
      }
    }
  }

  /**
   *
   * treeRender methods
   */
  getTreeItems() {
    return createTreeItems(this.props.children);
  }

  renderTreeItem = ({ key, props }) => {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getKeyboardOpenId,
      getTreeItemArray,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      guidelines,
      indicator,
    } = this.props;
    const payload = {
      ...props,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getKeyboardOpenId,
      getTreeItemArray,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      guidelines,
      indicator,
      key,
    };

    return <TreeItem {...payload} />;
  };

  renderTreeItems() {
    return this.getTreeItems().map(this.renderTreeItem);
  }

  renderTreeView = () => {
    const {
      alternateBg,
      children,
      guidelines,
      hasFocus,
      setTreeViewRef,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const payload = { ...otherProps };
    delete payload.indicator;
    delete payload.dataObject;
    delete payload.getActiveTreeItemId;
    delete payload.getActiveTreeItemIndex;
    delete payload.setTreeItemArray;
    delete payload.treeViewRef;
    delete payload.treeNode;
    delete payload.getTreeItemArray;
    delete payload.setActiveTreeItemId;
    delete payload.setActiveTreeItemIndex;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              alternateBg,
              guidelines,
              stylesheet: customStylesheet,
            },
            resolvedRoles
          );
          return (
            <div className={css(styles.higTreeViewWrapper)}>
              <ul
                {...payload}
                className={css(styles.higTreeView)}
                ref={setTreeViewRef}
                role="tree"
                tabIndex="0"
              >
                {this.renderTreeItems()}
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  /**
   *
   * treeObject methods
   */
  getTreeItemArray(collection) {
    objectArray.push(collection.id);

    if (collection.children) {
      collection.children.map((child) => {
        this.getTreeItemArray(child);
      });
    }
  }

  getTreeObject(collection) {
    let fileTree = {};
    const mapTreeObject = collection.reduce((acc, el, i) => {
      acc[el.id] = i;
      return acc;
    }, {});

    collection.forEach(function(el) {
      if (el.parentId === null) {
        fileTree = el;
        return;
      }
      const parentEl = collection[mapTreeObject[el.parentId]];
      parentEl.children = [...(parentEl.children || []), el];
    });

    return fileTree;
  }

  renderFileTree(tree, payload) {
    const appendPayload = {
      ...tree,
      payload,
    };
    return (
      <TreeObjectView
        tree={appendPayload}
        keyboardOpenId={payload.getKeyboardOpenId()}
      />
    );
  }

  renderTreeViewObject = () => {
    const {
      alternateBg,
      children,
      guidelines,
      setTreeViewRef,
      stylesheet: customStylesheet,
      treeNode,
      getKeyboardOpenId,
      getTreeItemArray,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      indicator,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      setTreeItemArray,
      treeViewRef,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const {
            getActiveTreeItemId,
            getActiveTreeItemIndex,
            guidelines,
            indicator,
            onClick,
          } = this.props;
          const styles = stylesheet(
            {
              alternateBg,
              guidelines,
              stylesheet: customStylesheet,
            },
            resolvedRoles
          );

          return (
            <div className={css(styles.higTreeViewWrapper)}>
              <ul
                {...otherProps}
                className={css(styles.higTreeView)}
                ref={setTreeViewRef}
                role="tree"
                tabIndex="0"
              >
                {this.renderFileTree(treeNode, {
                  getActiveTreeItemId,
                  getActiveTreeItemIndex,
                  guidelines,
                  indicator,
                  stylesheet,
                  onClick,
                  getKeyboardOpenId,
                  getTreeItemArray,
                  setActiveTreeItemId,
                  setActiveTreeItemIndex,
                  setKeyboardOpenId,
                  setTreeItemArray,
                  ...otherProps,
                })}
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  render() {
    return this.props.treeNode
      ? this.renderTreeViewObject()
      : this.renderTreeView();
  }
}
