import { Component } from "react";
import PropTypes from "prop-types";

function scrollInViewport(treeItem) {
  const treeItemBounding = treeItem.getBoundingClientRect();

  if (
    treeItemBounding.top < 0 ||
    treeItemBounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // align to the top if the top of Option is out of the viewport
    if (treeItemBounding.top < 0) {
      treeItem.scrollIntoView(true);
    }
    // align to the bottom if the bottom of Option is out of the viewport
    if (
      treeItemBounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      treeItem.scrollIntoView(true);
    }
  }
}

function scrollInListbox(treeItem, treeView) {
  if (treeItem && treeView.scrollHeight > treeView.clientHeight) {
    const scrollBottom = treeView.clientHeight + treeView.scrollTop;
    const elementBottom = treeItem.offsetTop + treeItem.offsetHeight;
    if (elementBottom > scrollBottom) {
      // eslint-disable-next-line no-param-reassign
      treeView.scrollTop = elementBottom - treeView.clientHeight;
    }
    if (treeItem.offsetTop < treeView.scrollTop) {
      // eslint-disable-next-line no-param-reassign
      treeView.scrollTop = treeItem.offsetTop;
    }
  }
}

function checkScroll(treeItemId, treeView) {
  const treeItem = document.getElementById(treeItemId);
  // scroll if out of viewport
  scrollInViewport(treeItem);

  // scroll within the menu
  scrollInListbox(treeItem, treeView);
}

function buildTreeItemIdArray(list) {
  return list.map(item => item.id);
}

export default class TreeViewBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    onKeyDown: PropTypes.func,
    treeNode: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        parentId: PropTypes.number,
        meta: PropTypes.shape({
          label: PropTypes.string,
          collapsed: PropTypes.bool,
          active: PropTypes.bool,
          icon: PropTypes.node
        })
      })
    ),
    treeViewRef: PropTypes.func
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      treeItemArray: null,
      activeTreeItemIndex: null,
      currentItemClicked: null,
      keyboardOpenId: ""
    };

    this.treeViewRef = null;
  }

  setTreeViewRef = element => {
    if (this.props.treeViewRef) {
      this.props.treeViewRef(element);
    }

    this.treeViewRef = element;
  };

  setTreeItemArray = objectArray => {
    this.setState({ treeItemArray: [...objectArray] });
  };

  getTreeItemArray = () => this.state.treeItemArray;

  getActiveTreeItemId = () =>
    this.state.treeItemArray &&
    this.state.treeItemArray[this.getActiveTreeItemIndex()];

  setActiveTreeItemId = currentItemClicked => {
    this.setState({ currentItemClicked });
  };

  getCurrentItemClicked = () => this.state.currentItemClicked;

  getActiveTreeItemIndex = () => this.state.activeTreeItemIndex;

  setActiveTreeItemIndex = index => {
    this.setState({ activeTreeItemIndex: index });
  };

  getKeyboardOpenId = () => this.state.keyboardOpenId;

  setKeyboardOpenId = id => {
    this.setState({ keyboardOpenId: id });
  };

  handleKeyDown = event => {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getTreeItemArray,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      props,
      treeViewRef
    } = this;
    if (this.props.onKeyDown) {
      this.props.onKeyDown(
        event,
        {
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getTreeItemArray,
          setActiveTreeItemId,
          setActiveTreeItemIndex,
          setKeyboardOpenId
        }
      );
    }

    const domNodeList = treeViewRef.querySelectorAll("li");
    const treeItemArrayControl =
      getTreeItemArray().length !== domNodeList.length ||
      props.treeNode
        ? buildTreeItemIdArray(Array.prototype.slice.call(domNodeList))
        : getTreeItemArray();

    const lowerLimit = 0;
    const upperLimit = treeItemArrayControl.length - 1;

    switch (event.keyCode) {
      // Arrow Down
      case 40: {
        event.preventDefault();
        if (getActiveTreeItemIndex() === upperLimit) {
          setActiveTreeItemIndex(lowerLimit);

          checkScroll(treeItemArrayControl[lowerLimit], treeViewRef);
        } else {
          setActiveTreeItemIndex(getActiveTreeItemIndex() + 1);

          checkScroll(
            treeItemArrayControl[getActiveTreeItemIndex() + 1],
            treeViewRef
          );
        }
        break;
      }

      // Arrow Up
      case 38: {
        event.preventDefault();
        if (getActiveTreeItemIndex() <= lowerLimit) {
          setActiveTreeItemIndex(upperLimit);

          checkScroll(treeItemArrayControl[upperLimit], treeViewRef);
        } else {
          setActiveTreeItemIndex(getActiveTreeItemIndex() - 1);

          checkScroll(
            treeItemArrayControl[getActiveTreeItemIndex() - 1],
            treeViewRef
          );
        }
        break;
      }

      // Enter
      case 13: {
        event.preventDefault();
        setKeyboardOpenId(getActiveTreeItemId());
        break;
      }
      // Space
      case 32: {
        event.preventDefault();
        setActiveTreeItemId(getActiveTreeItemId());
        break;
      }

      default:
    }
  };

  render() {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getCurrentItemClicked,
      getKeyboardOpenId,
      getTreeItemArray,
      handleClick,
      handleKeyDown,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      setTreeItemArray,
      setTreeViewRef,
      treeViewRef
    } = this;

    return this.props.children({
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getCurrentItemClicked,
      getKeyboardOpenId,
      getTreeItemArray,
      handleClick,
      handleKeyDown,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      setTreeItemArray,
      setTreeViewRef,
      treeViewRef
    });
  }
}
