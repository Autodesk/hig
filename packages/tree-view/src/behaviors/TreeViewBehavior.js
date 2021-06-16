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
      treeItem.scrollIntoView(false);
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

export default class TreeViewBehaviorRR extends Component {
  static propTypes = {
    children: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    treeViewRef: PropTypes.node
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      treeItemArray: null,
      activeTreeItemIndex: 1,
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

  // repeat of func above?
  getCurrentItemClicked = () => this.state.currentItemClicked;

  setActiveTreeItemId = currentItemClicked => {
    this.setState({ currentItemClicked });
  };

  getActiveTreeItemIndex = () => this.state.activeTreeItemIndex;

  setActiveTreeItemIndex = index => {
    this.setState({ activeTreeItemIndex: index });
  };

  getKeyboardOpenId = () => this.state.keyboardOpenId;

  setKeyboardOpenId = id => {
    this.setState({ keyboardOpenId: id });
  };

  handleFocus = event => {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleKeyDown = event => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }

    const domNodeList = this.treeViewRef.querySelectorAll("li");
    const treeItemArrayControl =
      this.getTreeItemArray().length !== domNodeList.length
        ? buildTreeItemIdArray(Array.prototype.slice.call(domNodeList))
        : this.getTreeItemArray();
    const lowerLimit = 0;
    const upperLimit = treeItemArrayControl.length - 1;

    switch (event.keyCode) {
      // Arrow Down
      case 40: {
        event.preventDefault();
        if (this.getActiveTreeItemIndex() === upperLimit) {
          this.setActiveTreeItemIndex(lowerLimit);

          checkScroll(treeItemArrayControl[lowerLimit], this.treeViewRef);
        } else {
          this.setActiveTreeItemIndex(this.getActiveTreeItemIndex() + 1);

          checkScroll(
            treeItemArrayControl[this.getActiveTreeItemIndex() + 1],
            this.treeViewRef
          );
        }
        break;
      }

      // Arrow Up
      case 38: {
        event.preventDefault();
        if (this.getActiveTreeItemIndex() <= lowerLimit) {
          this.setActiveTreeItemIndex(upperLimit);

          checkScroll(treeItemArrayControl[upperLimit], this.treeViewRef);
        } else {
          this.setActiveTreeItemIndex(this.getActiveTreeItemIndex() - 1);

          checkScroll(
            treeItemArrayControl[this.getActiveTreeItemIndex() - 1],
            this.treeViewRef
          );
        }
        break;
      }

      // Enter
      // Space
      case 13:
      case 32: {
        event.preventDefault();
        this.setKeyboardOpenId(this.getActiveTreeItemId());
        break;
      }

      default:
    }
  };

  handleClick = (event, treeItem) => {
    if (treeItem) {
      const { id } = treeItem;
      this.setActiveTreeItemId(id);
      this.setActiveTreeItemIndex(this.getTreeItemArray().indexOf(id));
    }
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render() {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getKeyboardOpenId,
      getTreeItemArray,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      setTreeViewRef,
      treeViewRef,
      handleClick,
      setTreeItemArray
    } = this;

    return this.props.children({
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getKeyboardOpenId,
      getTreeItemArray,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      setTreeViewRef,
      treeViewRef,
      handleClick,
      setTreeItemArray
    });
  }
}
