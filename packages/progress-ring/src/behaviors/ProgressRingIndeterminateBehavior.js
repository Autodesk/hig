import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const CYCLE_DURATION = 1000;
const FADE_DURATION = 416;

const ProgressRingIndeterminateBehavior = (props) => {
  const [cssTransitionState, setcssTransitionState] = useState(null);
  const [playing, setPlaying] = useState(null);
  const containerRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  let startTime;
  let segments;
  let SEGMENT_COUNT;
  let SEGMENT_DELAY_FACTOR;

  const opacityForSegment = (index, elapsedThisCycle) => {
    const segmentFadeStartTime = index * SEGMENT_DELAY_FACTOR;

    // Fade continuing from previous cycle
    if (
      segmentFadeStartTime + FADE_DURATION > CYCLE_DURATION &&
      elapsedThisCycle < FADE_DURATION
    ) {
      return (
        ((elapsedThisCycle + CYCLE_DURATION - segmentFadeStartTime) /
          FADE_DURATION -
          1) *
        -1
      );
    }

    // Fade has finished
    if (
      elapsedThisCycle < segmentFadeStartTime ||
      elapsedThisCycle > segmentFadeStartTime + FADE_DURATION
    ) {
      return 0;
    }

    // Fading
    return Math.abs(
      (elapsedThisCycle - segmentFadeStartTime) / FADE_DURATION - 1
    );
  };

  const setSegmentOpacities = (elapsedThisCycle) => {
    segments.forEach((segment, i) => {
      const index = Math.abs(i - SEGMENT_COUNT) - 1;
      const eachSegment = segment;
      eachSegment.style.opacity = opacityForSegment(index, elapsedThisCycle);
    });
  };

  const initSegments = () => {
    const { current } = containerRef;
    segments = Array.from(
      current.querySelectorAll(".hig__progress-ring__segment")
    );
    current.querySelector(".hig__progress-ring__mask").style.opacity = null;
    SEGMENT_COUNT = segments.length;
    SEGMENT_DELAY_FACTOR = CYCLE_DURATION / SEGMENT_COUNT;
  };

  const step = (timestamp) => {
    animationFrameIdRef.current = undefined;
    if (!playing) {
      return;
    }

    if (cssTransitionState !== "entered" && !animationFrameIdRef.current) {
      animationFrameIdRef.current = window.requestAnimationFrame(step);
      return;
    }

    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const elapsedThisCycle = elapsed % CYCLE_DURATION;
    setSegmentOpacities(elapsedThisCycle);

    if (!animationFrameIdRef.current) {
      animationFrameIdRef.current = window.requestAnimationFrame(step);
    }
  };

  const start = () => {
    setPlaying(true);
    startTime = undefined;
    if (!animationFrameIdRef.current) {
      animationFrameIdRef.current = window.requestAnimationFrame(step);
    }
  };

  const handleEntering = () => {
    setcssTransitionState("entering");
  };

  const handleEntered = () => {
    setcssTransitionState("entered");
    start();
  };

  const handleExiting = () => {
    setcssTransitionState("exited");
  };

  const handleExited = () => {
    setcssTransitionState("exited");
  };

  useEffect(() => {
    initSegments();
    step(1);
  });
  useEffect(
    () => () => {
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = undefined;
      }
    },
    []
  );

  return (
    <CSSTransition
      in
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
          cssTransitionState: status,
        })
      }
    </CSSTransition>
  );
};

ProgressRingIndeterminateBehavior.displayName =
  "ProgressRingIndeterminateBehavior";

ProgressRingIndeterminateBehavior.propTypes = {
  /** Render prop */
  children: PropTypes.func.isRequired,
};

export default ProgressRingIndeterminateBehavior;
