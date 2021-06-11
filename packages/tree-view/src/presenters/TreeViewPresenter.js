import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";
import TreeItem from "../TreeItem";

function createTreeItems(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { type, key, props = {} } = child;

    if (type === TreeItem) {
      result.push({ key, props });
    }

    return result;
  }, []);
}

function buildTreeItemIdArray(list) {
  const ids = [];

  list.map((item) => {
    ids.push(item.id);
  });

  return ids;
}

export default class TreeViewPresenter extends Component {
  static propTypes = {
    alternateBg: PropTypes.bool,
    children: PropTypes.node,
    getActiveTreeItemIndex: PropTypes.func,
    guidelines: PropTypes.bool,
    indicator: PropTypes.string,
    selected: PropTypes.bool,
    setTreeViewRef: PropTypes.func,
    stylesheet: PropTypes.func
  };

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    const currentTreeArray = this.props.getTreeItemArray();
    const newTreeArray = buildTreeItemIdArray(Array.prototype.slice.call(this.props.treeViewRef.querySelectorAll("li")));
    // console.log(Array.prototype.slice.call(this.props.treeViewRef.querySelectorAll("li")));
    // this.props.setTreeItemArray(Array.prototype.slice.call(this.props.treeViewRef.querySelectorAll("li")))

    if (JSON.stringify(newTreeArray) !== JSON.stringify(currentTreeArray)) {
      // this.props.setOptionsInfo(optionsInfo);
    }
    if (!currentTreeArray) {
      this.props.setTreeItemArray(newTreeArray);
    }
  }

  getTreeItems() {
    return createTreeItems(this.props.children);
  }

  renderTreeItem = ({ key, props }) => {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getTreeItemArray,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      guidelines,
      indicator
    } = this.props;
    const payload = {
      ...props,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getTreeItemArray,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      guidelines,
      indicator,
      key
    };

    return <TreeItem {...payload} />;
  };

  renderTreeItems() {
    return this.getTreeItems().map(this.renderTreeItem);
  }

  render() {
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
              stylesheet: customStylesheet
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
  }
}