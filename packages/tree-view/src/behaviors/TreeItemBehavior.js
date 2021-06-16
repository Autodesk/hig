import { Component } from "react";
import PropTypes from "prop-types";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    id: PropTypes.string,
    getTreeItemArray: PropTypes.func,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    setActiveTreeItemId: PropTypes.func,
    setActiveTreeItemIndex: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: this.props.defaultCollapsed
    };
  }

  getIsCollapsed = () =>
    this.isCollapsedControlled()
      ? this.props.collapsed
      : this.state.isCollapsed;

  setIsCollapsed = isCollapsed => {
    this.setState({ isCollapsed });
  };

  isCollapsedControlled = () => this.props.collapsed !== undefined;

  handleClick = (event, treeItem) => {
    const {
      getTreeItemArray,
      id,
      onClick,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      ...otherProps
    } = this.props;
    const { payload } = otherProps;
    if (onClick) {
      onClick(event);
    }

    if (payload) {
      payload.onClick(event, treeItem);
    } else {
      const treeItemArray = getTreeItemArray();
      const index = treeItemArray !== null && treeItemArray.indexOf(id);
      setActiveTreeItemId(id);
      setActiveTreeItemIndex(index);
      this.setIsCollapsed(!this.getIsCollapsed());
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
