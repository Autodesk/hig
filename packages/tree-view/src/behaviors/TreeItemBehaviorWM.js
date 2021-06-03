import { Component } from "react";
import PropTypes from "prop-types";
import selectOption from "./selectOption";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  handleClick = event => {
    if (onClick) {
      onClick(event);
    }
  };

  handleMouseEnter = event => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  handleMouseLeave = event => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const {
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      setTreeViewRef,
      treeViewRef
    } = this;
// console.log('TreeItem Behavior WM');
    return this.props.children({
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      setTreeViewRef,
      treeViewRef
    });
  }
}
