import React, { useRef, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import { css, cx } from "emotion";
import { createCustomClassNames } from "@weave-design/utils";
import stylesheet from "../stylesheet";

const ContentPresenter = (props) => {
  const { children, collapsed, className } = props;

  const contentContainerRef = useRef(null);

  const [contentOverflow, setContentOverflow] = useState("hidden");
  const [contentHeight, setContentHeight] = useState(0);
  const [isAnimationAllowed, setIsAnimationAllowed] = useState(false);

  useLayoutEffect(() => {
    if (contentContainerRef.current)
      setContentHeight(contentContainerRef.current.scrollHeight);
  }, [children, contentContainerRef]);

  const onAnimationDone = (callback, duration) => {
    setTimeout(() => callback(), duration);
  };

  const { createTransitionStyles } = stylesheet();

  const { transitionStyles, duration, defaultStyle } = createTransitionStyles({
    contentHeight,
    contentOverflow,
    isAnimationAllowed,
  });

  const contentClassName = createCustomClassNames(className, "content");

  return (
    <Transition
      nodeRef={contentContainerRef}
      timeout={duration}
      in={!collapsed}
      onEntering={() => {
        setIsAnimationAllowed(true);
      }}
      onExiting={() => {
        setIsAnimationAllowed(true);
      }}
      onEntered={() => {
        onAnimationDone(() => {
          setContentOverflow("visible");
        }, duration);
      }}
      onExited={() => {
        setContentOverflow("hidden");
      }}
    >
      {(state) => (
        <div
          ref={contentContainerRef}
          className={cx(
            css(defaultStyle),
            css(transitionStyles[state]),
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

ContentPresenter.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
  className: PropTypes.string,
};

export default ContentPresenter;
