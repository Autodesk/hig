import { Component } from "react";
import PropTypes from "prop-types";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    getTreeItemArray: PropTypes.func,
    id: PropTypes.string,
    onClick: PropTypes.func,
    setActiveTreeItemId: PropTypes.func,
    setActiveTreeItemIndex: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: this.props.defaultCollapsed
    };
  }

  setIsCollapsed = isCollapsed => {
    this.setState({ isCollapsed });
  };

  getIsCollapsed = () =>
    this.isCollapsedControlled()
      ? this.props.collapsed
      : this.state.isCollapsed;

  isCollapsedControlled = () => this.props.collapsed !== undefined;

  handleClick = (event, treeItem) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.payload) {
      const {
        payload: {
          getTreeItemArray,
          setActiveTreeItemId,
          setActiveTreeItemIndex
        }
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
        setActiveTreeItemIndex
      } = this.props;

      const treeItemArray = getTreeItemArray();
      const index = treeItemArray !== null && treeItemArray.indexOf(id);
      setActiveTreeItemId(id);
      setActiveTreeItemIndex(index);
      this.setIsCollapsed(!this.getIsCollapsed());
    }
  };

  render() {
    const { getIsCollapsed, handleClick, setIsCollapsed } = this;

    return this.props.children({
      getIsCollapsed,
      handleClick,
      setIsCollapsed
    });
  }
}
