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
      isCollapsed: this.props.defaultCollapsed,
    };
  }

  isCollapsedControlled = () => this.props.collapsed !== undefined;

  getIsCollapsed = () =>
    this.isCollapsedControlled()
      ? this.props.collapsed
      : this.state.isCollapsed;

  setIsCollapsed = (isCollapsed) => {
    this.setState({ isCollapsed });
  };

  handleClick = (event, treeItem) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.payload) {
      const {
        payload: {
          getTreeItemArray,
          setActiveTreeItemId,
          setActiveTreeItemIndex,
        },
      } = this.props;
      treeItem.meta.collapsed = !treeItem.meta.collapsed;
      const treeItemArray = getTreeItemArray();
      const index =
        treeItemArray !== null && treeItemArray.indexOf(treeItem.id);
      setActiveTreeItemId(treeItem.id);
      setActiveTreeItemIndex(index);
      this.setIsCollapsed(treeItem.meta.collapsed);
    } else {
      const {
        id,
        getTreeItemArray,
        setActiveTreeItemId,
        setActiveTreeItemIndex,
      } = this.props;

      const treeItemArray = getTreeItemArray();
      const index = treeItemArray !== null && treeItemArray.indexOf(id);
      setActiveTreeItemId(id);
      setActiveTreeItemIndex(index);
      this.setIsCollapsed(!this.getIsCollapsed());
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
      setIsCollapsed,
    } = this;

    return this.props.children({
      getIsCollapsed,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      setIsCollapsed,
    });
  }
}
