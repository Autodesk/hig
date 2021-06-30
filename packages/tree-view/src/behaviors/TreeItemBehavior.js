import { Component } from "react";
import PropTypes from "prop-types";

export default class TreeItemBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    getTreeItemArray: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    setActiveTreeItemId: PropTypes.func,
    setActiveTreeItemIndex: PropTypes.func,
    payload: PropTypes.shape({
      getTreeItemArray: PropTypes.func,
      setActiveTreeItemId: PropTypes.func,
      setActiveTreeItemIndex: PropTypes.func
    })
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
      // eslint-disable-next-line no-param-reassign
      const treeItemArray = getTreeItemArray();
      const index =
        treeItemArray !== null && treeItemArray.indexOf(treeItem.id);
      setActiveTreeItemId(treeItem.id);
      setActiveTreeItemIndex(index);
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
    }
  };

  handleOperatorClick = () => {
    if (this.props.payload) {
      this.setIsCollapsed(!this.getIsCollapsed());
    } else {
      this.setIsCollapsed(!this.getIsCollapsed());
    }
  };

  render() {
    const {
      getIsCollapsed,
      handleClick,
      handleOperatorClick,
      setIsCollapsed
    } = this;

    return this.props.children({
      getIsCollapsed,
      handleClick,
      handleOperatorClick,
      setIsCollapsed
    });
  }
}
