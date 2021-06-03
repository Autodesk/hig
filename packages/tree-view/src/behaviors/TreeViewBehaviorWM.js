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

  list.map(item => {
    ids.push(item.id);
  })

  return ids;
}

export default class TreeViewBehaviorWM extends Component {
  static propTypes = {
    children: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
  
  };

  constructor(props) {
    super(props);

    this.state = {
      treeItemArray: null,
      activeTreeItemIndex: 1
    };

    this.treeViewRef = null
  }

  setTreeViewRef = element => {
    if (this.props.treeViewRef) {
      this.props.treeViewRef(element);
    }

    console.log('set tree view ref');
    this.setState({
      treeItemArray: 
      buildTreeItemIdArray(
        Array.prototype.slice.call(element.querySelectorAll('li'))
      )
    });
    this.treeViewRef = element;
  };

  getActiveTreeItemId = () => {
    return this.state.treeItemArray && this.state.treeItemArray[this.getActiveTreeItemIndex()];
  };

  getActiveTreeItemIndex = () => {
    return this.state.activeTreeItemIndex;
  };

  /* getPreviousEvent = () => this.state.previousEvent;

  setPreviousEvent = previousEvent => {
    this.setState({ previousEvent });
  }; */

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
    if (onKeyDown) {
      onKeyDown(event);
    }

    switch (event.keyCode) {
      // Arrow Down
      case 40: {
        event.preventDefault();
        break;
      }

      // Arrow Up
      case 38: {
        event.preventDefault();
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
      treeViewRef
    } = this;

    return this.props.children({
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setTreeViewRef,
      treeViewRef
    });
  }
}
