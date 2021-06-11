import { Component } from "react";
import PropTypes from "prop-types";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  handleClick = (event, treeItem) => {
    // console.log(this.props);
    if (this.props.payload) {
      this.props.payload.onClick(event, treeItem);
    } else {
      const {
        id,
        getTreeItemArray,
        setActiveTreeItemId,
        setActiveTreeItemIndex
      } = treeItem;
      const treeItemArray = getTreeItemArray();
      const index = treeItemArray !== null && treeItemArray.indexOf(id);
      console.log('handleclick treeitembehavior');
      console.log(event);
      console.log(treeItem);
      console.log(treeItemArray);
      console.log(index);
      
      setActiveTreeItemId(id);
      setActiveTreeItemIndex(index);
    }
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  handleMouseEnter = (event) => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  handleMouseLeave = (event) => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const { handleClick, handleMouseEnter, handleMouseLeave } = this;
    // console.log("TreeItem Behavior");
    return this.props.children({
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
    });
  }
}
