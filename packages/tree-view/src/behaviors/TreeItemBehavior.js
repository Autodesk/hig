import { Component } from "react";
import PropTypes from "prop-types";
import selectOption from "./selectOption";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  handleClick = (event, treeItem) => {
    this.props.payload.onClick(event, treeItem);
    if (this.props.onClick) {
      onClick(event);
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
    console.log("TreeItem Behavior");
    return this.props.children({
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
    });
  }
}
