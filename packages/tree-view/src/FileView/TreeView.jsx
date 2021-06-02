import React, { Component } from "react";

class TreeView extends Component {
  state = {
    treeNode: this.props.tree,
  };

  handleClickParent(treeNode) {
    console.log("treeNode Info: ", treeNode);
    this.setState({
      treeNode: {
        ...treeNode,
        meta: { ...treeNode.meta, toggled: !treeNode.meta.toggled },
      },
    });
  }

  renderProperties(treeItem) {
    return Object.keys(treeItem)
      .filter((prop) => prop !== "children")
      .map((prop) => {
        if (prop === "meta") {
          return Object.entries(treeItem[prop]).map(([key, value]) => (
            <div key={Math.random()}>{`${key}: ${value}`}</div>
          ));
        }
        return (
          <div key={`${treeItem[prop]}`}>{`${prop}: ${treeItem[prop]}`}</div>
        );
      });
  }

  render() {
    const { treeNode } = this.state;
    return (
      <div
        className="parent-member"
        onClick={() => this.handleClickParent(treeNode)}
      >
        {this.renderProperties(treeNode)}
      </div>
    );
  }
}

export default TreeView;
