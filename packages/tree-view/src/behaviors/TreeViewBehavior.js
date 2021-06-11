import { Component } from "react";
import PropTypes from "prop-types";

/* function scrollInViewport(option) {
  const optionBounding = option.getBoundingClientRect();

  if (
    optionBounding.top < 0 ||
    optionBounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // align to the top if the top of Option is out of the viewport
    if (optionBounding.top < 0) {
      option.scrollIntoView(true);
    }
    // align to the bottom if the bottom of Option is out of the viewport
    if (
      optionBounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      option.scrollIntoView(false);
    }
  }
}

function scrollInListbox(option, menu) {
  if (option && menu.scrollHeight > menu.clientHeight) {
    const scrollBottom = menu.clientHeight + menu.scrollTop;
    const elementBottom = option.offsetTop + option.offsetHeight;
    if (elementBottom > scrollBottom) {
      // eslint-disable-next-line no-param-reassign
      menu.scrollTop = elementBottom - menu.clientHeight;
    }
    if (option.offsetTop < menu.scrollTop) {
      // eslint-disable-next-line no-param-reassign
      menu.scrollTop = option.offsetTop;
    }
  }
}

function checkScroll(optionId, menu) {
  const option = document.getElementById(optionId);

  // scroll if out of viewport
  scrollInViewport(option);

  // scroll within the menu
  scrollInListbox(option, menu);
} */

function buildTreeItemIdArray(list) {
  const ids = [];

  list.map((item) => {
    ids.push(item.id);
  });

  return ids;
}

export default class TreeViewBehaviorRR extends Component {
  static propTypes = {
    children: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      treeItemArray: null,
      activeTreeItemIndex: 1,
      currentItemClicked: null,
    };

    this.treeViewRef = null;
  }

  setTreeViewRef = (element) => {
    if (this.props.treeViewRef) {
      this.props.treeViewRef(element);
    }

    console.log("set tree view ref");
    console.log("THIS PROPS", this.props);
    console.log(Array.prototype.slice.call(element.querySelectorAll("li")));
    this.setState({
      treeItemArray: buildTreeItemIdArray(
        Array.prototype.slice.call(element.querySelectorAll("li"))
      ),
    });
    this.treeViewRef = element;
  };

  setTreeItemArray = (objectArray) => {
    this.setState({ treeItemArray: [...objectArray] });
  };

  getActiveTreeItemId = () => {
    return (
      this.state.treeItemArray &&
      this.state.treeItemArray[this.getActiveTreeItemIndex()]
    );
  };

  setActiveTreeItemId = (id) => {
    this.setState({ currentItemClicked: id });
  };

  getActiveTreeItemIndex = () => {
    return this.state.activeTreeItemIndex;
  };

  setActiveTreeItemIndex = (index) => {
    this.setState({ activeTreeItemIndex: index });
  };

  /* getPreviousEvent = () => this.state.previousEvent;

  setPreviousEvent = previousEvent => {
    this.setState({ previousEvent });
  }; */

  handleFocus = (event) => {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = (event) => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleKeyDown = (event) => {
    if (this.props.onKeyDown) {
      onKeyDown(event);
    }

    console.log("on key down");
    console.log("getActiveTreeItemIndex", this.getActiveTreeItemIndex());
    const lowerLimit = 0;
    const upperLimit = this.state.treeItemArray.length - 1;

    switch (event.keyCode) {
      // Arrow Down
      case 40: {
        event.preventDefault();

        this.setState({
          activeTreeItemIndex:
            this.state.activeTreeItemIndex + 1 > upperLimit
              ? lowerLimit
              : this.state.activeTreeItemIndex + 1,
        });
        break;
      }

      // Arrow Up
      case 38: {
        event.preventDefault();
        this.setState({
          activeTreeItemIndex:
            this.state.activeTreeItemIndex - 1 < lowerLimit
              ? upperLimit
              : this.state.activeTreeItemIndex - 1,
        });
        break;
      }

      // Enter
      // Space
      case 13:
      case 32: {
        event.preventDefault();
        break;
      }

      default:
    }
  };

  handleClick = (event, treeItem) => {
    if (treeItem) {
      const { id, index } = treeItem;
      this.setActiveTreeItemId(id);
      this.setActiveTreeItemIndex(index);
    }
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  /* handleMouseMove = event => {
    // don't let this bubble up from Menu to MenuGroup
    event.stopPropagation();

    if (this.getPreviousEvent() === event.type) {
      return;
    }

    this.setPreviousEvent(event.type);
  }; */

  render() {
    const {
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setTreeViewRef,
      treeViewRef,
      handleClick,
      setTreeItemArray,
    } = this;

    return this.props.children({
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setTreeViewRef,
      treeViewRef,
      handleClick,
      setTreeItemArray,
    });
  }
}
