import { Component } from "react";
import PropTypes from "prop-types";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
    };

  }

  setIsCollapsed = isCollapsed => {
    this.setState({isCollapsed})
  }

  getIsCollapsed = () => {
    if (this.props.collapsed) {
      return this.props.collapsed;
    }
    return this.state.isCollapsed;
  }

  handleClick = (event, treeItem) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

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

      setActiveTreeItemId(id);
      setActiveTreeItemIndex(index);
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
    const {
      getIsCollapsed,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      setIsCollapsed
    } = this;

    return this.props.children({
      getIsCollapsed,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      setIsCollapsed
    });
  }
}
