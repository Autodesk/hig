import React, { PureComponent } from "react";

class TreeItem extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="child-member">
        {children.map((child) => this.props.renderFileTree(child))}
      </div>
    );
  }
}

export default TreeItem;
