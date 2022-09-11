import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import selectOption from "./selectOption";

function scrollInViewport(option) {
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
}

const MenuBehavior = (props) => {
  const isControlled = () => props.selected !== undefined;
  const [activeOptionHook, setActiveOptionHook] = useState(
    isControlled() ? props.selected : props.defaultSelected
  );
  const [highlightIndexHook, setHighlightIndexHook] = useState(0);
  const [optionInfoHook, setOptionInfoHook] = useState(null);
  const [previousEventHook, setPreviousEventHook] = useState(null);
  const menuRef = useRef(null);

  const setMenuRef = (element) => {
    if (props.menuRef) {
      props.menuRef(element);
    }
    menuRef.current = element;
  };

  const setOptionsInfo = (optionInfo) => {
    setOptionInfoHook(optionInfo);
  };

  const getOptionsInfo = () => optionInfoHook;

  const setActiveOption = (activeOption) => {
    const { onChange, unselect } = props;
    if (onChange) {
      if (unselect) {
        props.onChange(activeOption);
        setActiveOptionHook(activeOption);
      } else {
        let newActiveOption;
        if (
          activeOption.length === 0 ||
          activeOption.length < activeOptionHook.length
        ) {
          newActiveOption = activeOptionHook;
          props.onChange(activeOptionHook);
        } else {
          newActiveOption = activeOption;
          props.onChange(activeOption);
        }
        setActiveOptionHook(newActiveOption);
      }
    }
  };

  const getActiveOption = () => activeOptionHook;

  const setHighlightIndex = (highlightIndex) => {
    setHighlightIndexHook(highlightIndex);
  };

  const getHighlightIndex = () => highlightIndexHook;

  const getPreviousEvent = () => previousEventHook;

  const setPreviousEvent = (previousEvent) => {
    setPreviousEventHook(previousEvent);
  };

  // eslint-disable-next-line no-unused-vars
  const getTotalOptions = () => Object.keys(optionInfoHook).length;

  const handleFocus = (event) => {
    if (props.onFocus) {
      props.onFocus(event);
    }

    event.stopPropagation();
  };

  const handleBlur = (event) => {
    if (props.onBlur) {
      props.onBlur(event);
    }

    event.stopPropagation();
    setHighlightIndex(0);
  };

  const handleKeyDown = (event) => {
    const { multiple, onKeyDown } = props;
    const options = optionInfoHook;
    const highlightableIndexes = [];
    const { id } =
      optionInfoHook?.[getHighlightIndex() - 1] ||
      menuRef.current.children[0].id;
    const callKeyDown = (currentHighlightedId) => {
      if (onKeyDown) {
        onKeyDown(event, { currentHighlightedId });
      }
    };

    Object.keys(options).forEach((index) => {
      if (!options[index].disabled && options[index].role !== `presentation`) {
        highlightableIndexes.push(Number(index) + 1);
      }
    });

    setPreviousEvent(event.type);

    switch (event.code) {
      case "ArrowDown": {
        const currentIndex = highlightableIndexes.indexOf(getHighlightIndex());
        const lastIndex = highlightableIndexes.length - 1;

        if (currentIndex === lastIndex) {
          setHighlightIndex(highlightableIndexes[0]);
          callKeyDown(getOptionsInfo()[highlightableIndexes[0] - 1].id);
          checkScroll(
            getOptionsInfo()[highlightableIndexes[0] - 1].id,
            menuRef.current
          );
        } else {
          setHighlightIndex(highlightableIndexes[currentIndex + 1]);
          callKeyDown(
            getOptionsInfo()[highlightableIndexes[currentIndex + 1] - 1].id
          );
          checkScroll(
            getOptionsInfo()[highlightableIndexes[currentIndex + 1] - 1].id,
            menuRef.current
          );
        }
        event.preventDefault();
        break;
      }

      case "ArrowUp": {
        const currentIndex = highlightableIndexes.indexOf(getHighlightIndex());
        const lastIndex = highlightableIndexes.length - 1;

        if (currentIndex <= 0) {
          setHighlightIndex(highlightableIndexes[lastIndex]);
          callKeyDown(getOptionsInfo()[highlightableIndexes[lastIndex] - 1].id);
          checkScroll(
            getOptionsInfo()[highlightableIndexes[lastIndex] - 1].id,
            menuRef.current
          );
        } else {
          setHighlightIndex(highlightableIndexes[currentIndex - 1]);
          callKeyDown(
            getOptionsInfo()[highlightableIndexes[currentIndex - 1] - 1].id
          );
          checkScroll(
            getOptionsInfo()[highlightableIndexes[currentIndex - 1] - 1].id,
            menuRef.current
          );
        }
        event.preventDefault();
        break;
      }

      case "Enter":
      case "Space": {
        const activeOptionsArray = [...activeOptionHook];
        const activeOptions = selectOption(id, activeOptionsArray, multiple);

        callKeyDown(id);
        if (isControlled()) {
          return;
        }

        setActiveOption(activeOptions);

        event.preventDefault();
        break;
      }

      default:
        callKeyDown(id);
    }
  };

  const handleMouseMove = (event) => {
    // don't let this bubble up from Menu to MenuGroup
    event.stopPropagation();

    if (getPreviousEvent() === event.type) {
      return;
    }

    setPreviousEvent(event.type);
  };

  const getActiveOptionMethod = props.getActiveOption
    ? props.getActiveOption
    : getActiveOption;
  const getHighlightIndexMethod = props.getHighlightIndex
    ? props.getHighlightIndex
    : getHighlightIndex;
  const getOptionsInfoMethod = props.getOptionsInfo
    ? props.getOptionsInfo
    : getOptionsInfo;
  const getPreviousEventMethod = props.getPreviousEvent
    ? props.getPreviousEvent
    : getPreviousEvent;
  const handleBlurMethod = props.handleBlur ? props.handleBlur : handleBlur;
  const handleFocusMethod = props.handleFocus ? props.handleFocus : handleFocus;
  const handleKeyDownMethod = props.handleKeyDown
    ? props.handleKeyDown
    : handleKeyDown;
  const handleMouseMoveMethod = props.handleMouseMove
    ? props.handleMouseMove
    : handleMouseMove;
  const setActiveOptionMethod = props.setActiveOption
    ? props.setActiveOption
    : setActiveOption;
  const setHighlightIndexMethod = props.setHighlightIndex
    ? props.setHighlightIndex
    : setHighlightIndex;
  const setOptionsInfoMethod = props.setOptionsInfo
    ? props.setOptionsInfo
    : setOptionsInfo;
  const setPreviousEventMethod = props.setPreviousEvent
    ? props.setPreviousEvent
    : setPreviousEvent;

  useEffect(() => {
    if (props.selected) {
      setActiveOptionHook(props.selected);
      if (props.onChange) {
        props.onChange(props.selected);
      }
    }
  }, [props.selected]);

  return props.children({
    getActiveOption: getActiveOptionMethod,
    getHighlightIndex: getHighlightIndexMethod,
    getOptionsInfo: getOptionsInfoMethod,
    getPreviousEvent: getPreviousEventMethod,
    handleBlur: handleBlurMethod,
    handleFocus: handleFocusMethod,
    handleKeyDown: handleKeyDownMethod,
    handleMouseMove: handleMouseMoveMethod,
    setActiveOption: setActiveOptionMethod,
    setHighlightIndex: setHighlightIndexMethod,
    setMenuRef,
    setOptionsInfo: setOptionsInfoMethod,
    setPreviousEvent: setPreviousEventMethod,
  });
};

MenuBehavior.displayName = "MenuBehavior";

MenuBehavior.propTypes = {
  children: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  defaultSelected: PropTypes.arrayOf(PropTypes.any),
  getActiveOption: PropTypes.func,
  getHighlightIndex: PropTypes.func,
  getOptionsInfo: PropTypes.func,
  getPreviousEvent: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handleMouseMove: PropTypes.func,
  menuRef: PropTypes.func,
  multiple: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.arrayOf(PropTypes.any),
  setActiveOption: PropTypes.func,
  setHighlightIndex: PropTypes.func,
  setOptionsInfo: PropTypes.func,
  setPreviousEvent: PropTypes.func,
  unselect: PropTypes.bool,
};

MenuBehavior.defaultProps = {
  defaultSelected: [],
};

export default MenuBehavior;
