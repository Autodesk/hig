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

  /* isActive = () => {
    return true;
    // return this.props.getActiveTreeItemId() === this.props.id;
  } */

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
      handleMouseLeave
    } = this;
// console.log('TreeItem Behavior WM');
// console.log(this.props);
    return this.props.children({
      handleClick,
      handleMouseEnter,
      handleMouseLeave
    });
  }
}
