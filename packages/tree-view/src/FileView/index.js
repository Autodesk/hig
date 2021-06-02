import React, { Component } from "react";
import "./index.scss";

import TreeView from "./TreeView";
import TreeItem from "./TreeItem";

class FileView extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.fileTreeCollection[0].id === this.props.fileTreeCollection[0].id
    )
      return false;
    return true;
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

  renderFileTree(tree) {
    const { id, children } = tree;
    return (
      <div key={id}>
        <TreeView tree={tree} />
        {children ? (
          <TreeItem renderFileTree={this.renderFileTree}>{children}</TreeItem>
        ) : null}
      </div>
    );
  }

  render() {
    const { fileTreeCollection } = this.props;
    return this.renderFileTree(this.getTreeObject(fileTreeCollection));
  }
}

export default FileView;
