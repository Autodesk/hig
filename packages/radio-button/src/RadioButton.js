import React from "react";
import { ControlBehavior } from "@hig/behaviors";

import RadioButtonPresenter from "./presenters/RadioButtonPresenter";

export default function RadioButton(props) {
  const {
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    ...otherProps
  } = props;

  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {({
        hasFocus,
        hasHover,
        isPressed,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp
      }) => (
        <RadioButtonPresenter
          hasFocus={hasFocus}
          hasHover={hasHover}
          isPressed={isPressed}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          {...otherProps}
        />
      )}
    </ControlBehavior>
  );
}
