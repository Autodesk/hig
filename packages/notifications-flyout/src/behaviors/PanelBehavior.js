import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { transitionStatuses, AVAILABLE_TRANSITION_STATUSES } from "@hig/flyout";

/** 50px per the design spec plus 30px for the height of the title */
const BOTTOM_SPACING = 80;
const TRANSITION_DURATION = 300;

/**
 * @param {HTMLDivElement} listWrapper
 * @returns {string}
 */
function calculateListMaxHeight(listWrapper) {
  if (!listWrapper) return "";

  const { top: listWrapperTop } = listWrapper.getBoundingClientRect();

  // Distance between the top of the list wrapper and the spacing at the bottom of the screen
  const height = window.innerHeight - BOTTOM_SPACING - listWrapperTop;

  return `${height}px`;
}

const PanelBehavior = (props) => {
  const [listMaxHeight, setListMaxHeight] = useState("");
  const listWrapperRef = useRef(null);

  const updateMaxHeight = () => {
    setListMaxHeight(calculateListMaxHeight(listWrapperRef.current));
  };

  const handleResize = () => {
    updateMaxHeight();
  };

  const bindResize = () => {
    window.addEventListener("resize", handleResize);
  };

  const unbindResize = () => {
    window.removeEventListener("resize", handleResize);
  };

  /**
   * @param {HTMLDivElement} listWrapperRef
   */
  const refListWrapper = (value) => {
    listWrapperRef.current = value;
  };

  const { children, loading } = props;

  useEffect(() => {
    bindResize();
    updateMaxHeight();

    return () => {
      unbindResize();
    };
  }, []);

  useEffect(() => {
    if (
      props.transitionStatus === transitionStatuses.HIDDEN ||
      props.transitionStatus === transitionStatuses.EXITED
    ) {
      window.requestAnimationFrame(() => {
        updateMaxHeight();
      });
    }
  }, [props]);

  return (
    <Transition in={loading} timeout={TRANSITION_DURATION}>
      {(loadingTransitionState) =>
        children({
          loadingTransitionState,
          listMaxHeight,
          refListWrapper,
        })
      }
    </Transition>
  );
};

PanelBehavior.propTypes = {
  children: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  transitionStatus: PropTypes.oneOf(AVAILABLE_TRANSITION_STATUSES),
};

PanelBehavior.defaultProps = {
  loading: false,
};

export default PanelBehavior;
