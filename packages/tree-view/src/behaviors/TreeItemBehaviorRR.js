import { Component } from "react";
import PropTypes from "prop-types";
import selectOption from "./selectOption";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  handleClick = (event) => {
    console.log("from ITEM BEHAVIOR handleClick");
    if (this.props.onClick) {
      onClick(event);
    }

    this.props.getActiveTreeId();
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
    console.log("TreeItem Behavior RR");
    return this.props.children({
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
    });
  }
}
