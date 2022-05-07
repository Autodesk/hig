import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { positions, AVAILABLE_POSITIONS } from "./positions";
import statuses from "./statuses";

import {
  animateCollapse,
  animateExpand,
  endCollapse,
  endExpand,
  prepareCollapse,
  startCollapse,
  startExpand,
} from "./updaters";

/**
 * @typedef {Object} BannerAnimatorProps
 * @property {boolean} [isVisible]
 * @property {boolean} [hasBounce]
 * @property {boolean} [hasPush]
 * @property {string} [position]
 * @property {function(ContainerBag): JSX.Element} children
 */

/**
 * @typedef {Object} BannerAnimatorState
 * @property {string} [status]
 * @property {Object.<string, string>} [wrapperStyle]
 * @property {Object.<string, string>} [innerWrapperStyle]
 * @property {HTMLDivElement} [wrapper]
 * @property {HTMLDivElement} [innerWrapper]
 */

/** @type {Component<BannerAnimatorProps, BannerAnimatorState>} */
const BannerAnimator = (props) => {
  /** @type {BannerAnimatorState} */
  const [status, setStatus] = useState(null);
  const [innerWrapper, setInnerWrapper] = useState(null);
  const [innerWrapperStyle, setInnerWrapperStyle] = useState(null);
  const [wrapper, setWrapper] = useState(null);
  const [wrapperStyle, setWrapperStyle] = useState(null);
  const prevState = {
    status,
    innerWrapper,
    innerWrapperStyle,
    wrapper,
    wrapperStyle,
  };
  const setState = {
    setStatus,
    setInnerWrapper,
    setInnerWrapperStyle,
    setWrapper,
    setWrapperStyle,
  };
  const expand = () => {
    window.requestAnimationFrame(() => {
      animateExpand(prevState, setState, props);
    });
  };

  const collapse = () => {
    window.requestAnimationFrame(() => {
      animateCollapse(prevState, setState, props);
    });
  };

  const collapseFromExpanded = () => {
    window.requestAnimationFrame(() => {
      prepareCollapse(prevState, setState, props);
      collapse();
    });
  };

  const handleReady = () => {
    if (status === statuses.EXPANDING) {
      expand();
    }
  };

  /** @param {TransitionEvent} event */
  const handleTransitionEnd = (event) => {
    if (event.target !== innerWrapper) return;

    if (status === statuses.COLLAPSING) {
      window.requestAnimationFrame(() => {
        endCollapse(prevState, setState, props);
      });
      return;
    }

    if (status === statuses.EXPANDING) {
      window.requestAnimationFrame(() => {
        endExpand(setState);
      });
    }
  };

  /** @param {HTMLDivElement} innerWrapperParams */
  const refInnerWrapper = (innerWrapperParams) => {
    setInnerWrapper(innerWrapperParams);
  };

  useEffect(() => {
    const { isVisible } = props;

    if (!status) {
      return isVisible
        ? endExpand(setState)
        : endCollapse(prevState, setState, props);
    }

    switch (status) {
      case statuses.COLLAPSED:
      case statuses.COLLAPSING:
        return isVisible ? startExpand(setState) : null;
      case statuses.EXPANDED:
      case statuses.EXPANDING:
        return isVisible ? null : startCollapse(setState);
      default:
        // eslint-disable-next-line no-console
        console.warn("Invalid status", { status });
        return null;
    }
  }, [props]);

  function usePreviousStatus(value) {
    const ref = useRef(null);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevStatus = usePreviousStatus(status);

  useEffect(() => {
    const expandStatuses =
      (prevStatus === statuses.COLLAPSED && status === statuses.EXPANDING) ||
      (prevStatus === statuses.COLLAPSING && status === statuses.EXPANDING);

    if (prevStatus === statuses.EXPANDED && status === statuses.COLLAPSING) {
      collapseFromExpanded();
      return;
    }
    if (expandStatuses) {
      expand();
      return;
    }
    if (prevStatus === statuses.EXPANDING && status === statuses.COLLAPSING) {
      collapse();
    }
  }, [props, prevStatus, status]);

  const { children: renderChildren } = props;
  const children =
    status === statuses.COLLAPSED ? null : renderChildren({ handleReady });
  const isBusy =
    status === statuses.EXPANDING || status === statuses.COLLAPSING;

  return (
    <div
      aria-busy={isBusy}
      aria-expanded={status === statuses.EXPANDED}
      style={wrapperStyle}
      onTransitionEnd={handleTransitionEnd}
    >
      <div style={innerWrapperStyle} ref={refInnerWrapper}>
        {children}
      </div>
    </div>
  );
};

BannerAnimator.displayName = "BannerAnimator";

BannerAnimator.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  /** Determines the visibility of the banner */
  isVisible: PropTypes.bool,
  /** Determines the type of animation used */
  hasBounce: PropTypes.bool,
  /** Determines the type of animation used */
  hasPush: PropTypes.bool,
  /** Determines the direction of the animation */
  position: PropTypes.oneOf(AVAILABLE_POSITIONS),
  /* eslint-enable react/no-unused-prop-types */
  /** A render prop, that renders the component to be animated */
  children: PropTypes.func.isRequired,
};

BannerAnimator.defaultProps = {
  isVisible: true,
  hasBounce: true,
  hasPush: true,
  position: positions.TOP,
};

export default BannerAnimator;
