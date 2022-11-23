import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const MAX_INCREASE_PER_MS = 1 / 1000;

const ProgressRingDeterminateBehavior = (props) => {
  const [cssTransitionState, setCSSTransitionState] = useState(null);
  const [transitionEnter, setTransitionEnter] = useState(true);
  const containerRef = useRef(null);
  let value = 0;
  let prevTimestamp = 0;
  let targetValue;
  let segments;
  let SEGMENT_COUNT;
  let FADE_DELAY_FACTOR;

  const wait = () => {
    prevTimestamp = window.performance.now();
    // eslint-disable-next-line no-use-before-define
    window.requestAnimationFrame(step);
  };

  const enter = () => {
    segments.forEach((segment) => {
      const eachSegment = segment;
      eachSegment.style.opacity = 0;
    });
    setTransitionEnter(true);
    wait();
  };
  /**
   * @todo The exit function is associated with the final state of the animation.
   */
  const exit = () => {
    segments.forEach((segment) => {
      const eachSegment = segment;
      eachSegment.style.opacity = null;
    });
    setTransitionEnter(false);
    wait();
  };

  const opacityForSegment = (index, param) => {
    const fadeStartValue = index * FADE_DELAY_FACTOR;
    return Math.max(0, (param - fadeStartValue) / FADE_DELAY_FACTOR);
  };

  const setSegmentOpacities = (param) => {
    segments.forEach((segment, i) => {
      const index = Math.abs(i - SEGMENT_COUNT) - 1;
      const eachSegment = segment;
      eachSegment.style.opacity = opacityForSegment(index, param);
    });
  };

  const progressTowardTarget = (timestamp) => {
    const elapsed = timestamp - prevTimestamp;
    let valueDiff;

    if (targetValue > value) {
      valueDiff = Math.min(elapsed * MAX_INCREASE_PER_MS, targetValue - value);
    } else if (targetValue < value) {
      valueDiff = Math.max(-elapsed * MAX_INCREASE_PER_MS, targetValue - value);
    } else {
      if (cssTransitionState !== "exited") {
        setSegmentOpacities(value);
      }
      prevTimestamp = undefined;
      return;
    }

    const interrumValue = value + valueDiff;

    setSegmentOpacities(interrumValue);

    prevTimestamp = timestamp;
    value = interrumValue;

    // eslint-disable-next-line no-use-before-define
    window.requestAnimationFrame(step);
  };

  const step = (timestamp) => {
    if (cssTransitionState === "entering" || cssTransitionState === "exiting") {
      wait();
      return;
    }

    if (cssTransitionState === "exited" && value !== targetValue) {
      enter();
      return;
    }
    /**
     * @todo The condition associated with the final state of the animation was modified
     * to prevent it from running. The exited state of the animation is the origin of an
     * infinite loop. The component must be refactored to optimize the component life cycle.
     */
    if (targetValue === 1 && value === 1 && cssTransitionState === "exited") {
      exit();
      return;
    }

    progressTowardTarget(timestamp);
  };

  const setProgress = (percent) => {
    targetValue = percent / 100;
    if (!prevTimestamp) {
      prevTimestamp = window.performance.now();
    }
    window.requestAnimationFrame(step);
  };

  const initSegments = () => {
    const { current } = containerRef;
    segments = Array.from(
      current.querySelectorAll(".hig__progress-ring__segment")
    );
    current.querySelector(".hig__progress-ring__mask").style.opacity = null;
    SEGMENT_COUNT = segments.length;
    FADE_DELAY_FACTOR = 1 / SEGMENT_COUNT;
  };

  const handleEntering = () => {
    setCSSTransitionState("entering");
  };

  const handleEntered = () => {
    setCSSTransitionState("entered");
    setProgress(props.percentComplete);
  };

  const handleExiting = () => {
    setCSSTransitionState("exiting");
  };

  const handleExited = () => {
    setCSSTransitionState("exited");
  };

  useEffect(() => {
    if (cssTransitionState === "entered" || cssTransitionState === "exited") {
      initSegments();
      setProgress(props.percentComplete);
    }
  });

  return (
    <CSSTransition
      in={transitionEnter}
      timeout={{ enter: 650, exit: 466 }}
      appear
      classNames="hig__progress-ring--"
      nodeRef={containerRef}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExiting={handleExiting}
      onExited={handleExited}
    >
      {(status) =>
        props.children({
          innerRef: containerRef,
          percentComplete: props.percentComplete,
          cssTransitionState: status,
        })
      }
    </CSSTransition>
  );
};

ProgressRingDeterminateBehavior.displayName = "ProgressRingDeterminateBehavior";

ProgressRingDeterminateBehavior.propTypes = {
  /**
   * An integer from 0 to 100 representing the percent the delayed operation has completed
   */
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Render prop */
  children: PropTypes.func.isRequired,
};

export default ProgressRingDeterminateBehavior;
