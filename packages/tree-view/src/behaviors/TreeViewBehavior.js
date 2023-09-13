import { useLayoutEffect, useState, useRef } from "react";
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
  scrollInListbox(treeItem, treeView.current);
}

function buildTreeItemIdArray(list) {
  return list.map((item) => item.id);
}

const TreeViewBehavior = (props) => {
  const isControlled = () => props.selected !== undefined;
  const [treeItemArray, setTreeItemArrayHook] = useState(null);
  const [activeTreeItemIndex, setActiveTreeItemIndexHook] = useState(null);
  const [currentItemClicked, setCurrentItemClickedHook] = useState(null);
  const [keyboardOpenId, setKeyboardOpenIdHook] = useState("");
  const treeViewRef = useRef(null);

  const setTreeViewRef = (element) => {
    if (props.treeViewRef) {
      props.treeViewRef(element);
    }

    treeViewRef.current = element;
  };

  const setTreeItemArray = (objectArray) => {
    setTreeItemArrayHook([...objectArray]);
  };

  const getTreeItemArray = () => treeItemArray;

  const getActiveTreeItemIndex = () => activeTreeItemIndex;

  const getActiveTreeItemId = () => {
    if (isControlled()) {
      return props.selected;
    }

    return treeItemArray && treeItemArray[getActiveTreeItemIndex()];
  };

  const setActiveTreeItemId = (currentItemclicked) => {
    setCurrentItemClickedHook(currentItemclicked);
  };

  const getCurrentItemClicked = () => currentItemClicked;

  const setActiveTreeItemIndex = (index) => {
    setActiveTreeItemIndexHook(index);
  };

  const getKeyboardOpenId = () => keyboardOpenId;

  const setKeyboardOpenId = (id) => {
    setKeyboardOpenIdHook(id);
  };

  const handleKeyDown = (event) => {
    if (props.onKeyDown) {
      props.onKeyDown(event, {
        getActiveTreeItemId,
        getActiveTreeItemIndex,
        getTreeItemArray,
        setActiveTreeItemId,
        setActiveTreeItemIndex,
        setKeyboardOpenId,
      });
    }

    const domNodeList = treeViewRef.current.querySelectorAll("li");
    const treeItemArrayControl =
      getTreeItemArray()?.length !== domNodeList?.length || props.treeNode
        ? buildTreeItemIdArray(Array.prototype.slice.call(domNodeList))
        : getTreeItemArray();

    const lowerLimit = 0;
    const upperLimit = treeItemArrayControl.length - 1;

    switch (event.code) {
      case "ArrowDown": {
        event.preventDefault();
        if (getActiveTreeItemIndex() === upperLimit) {
          setActiveTreeItemIndex(lowerLimit);
          checkScroll(treeItemArrayControl?.[lowerLimit], treeViewRef);
        } else {
          setActiveTreeItemIndex(getActiveTreeItemIndex() + 1);
          checkScroll(
            treeItemArrayControl?.[getActiveTreeItemIndex() + 1],
            treeViewRef
          );
        }
        break;
      }
      case "ArrowUp": {
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
      case "Enter": {
        event.preventDefault();
        setKeyboardOpenId(getActiveTreeItemId());
        break;
      }
      case "Space": {
        event.preventDefault();
        if (isControlled()) {
          return;
        }
        if (props.onChange) {
          props.onChange(getActiveTreeItemId());
        }
        setActiveTreeItemId(getActiveTreeItemId());
        break;
      }
      default:
    }
  };
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (props.selected) {
      if (props.onChange) {
        props.onChange(props.selected);
      }
    }
  }, [props.selected]);

  return props.children({
    getActiveTreeItemId,
    getActiveTreeItemIndex,
    getCurrentItemClicked,
    getKeyboardOpenId,
    getTreeItemArray,
    handleKeyDown,
    isControlled,
    setActiveTreeItemId,
    setActiveTreeItemIndex,
    setKeyboardOpenId,
    setTreeItemArray,
    setTreeViewRef,
    treeViewRef: treeViewRef.current,
  });
};

TreeViewBehavior.displayName = "TreeViewBehavior";

TreeViewBehavior.propTypes = {
  children: PropTypes.func,
  defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onKeyDown: PropTypes.func,
  selected: PropTypes.arrayOf([PropTypes.number, PropTypes.string]),
  treeNode: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      parentId: PropTypes.number,
      meta: PropTypes.shape({
        active: PropTypes.bool,
        collapsed: PropTypes.bool,
        expandByDoubleClick: PropTypes.bool,
        icon: PropTypes.node,
        label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
      }),
    })
  ),
  treeViewRef: PropTypes.func,
};

TreeViewBehavior.defaultProps = {};

export default TreeViewBehavior;
