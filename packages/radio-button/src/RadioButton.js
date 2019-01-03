import React from "react";
import { ControlBehavior } from "@hig/behaviors";
import { generateId } from "@hig/utils";

import RadioButtonPresenter from "./presenters/RadioButtonPresenter";
// import RadioButtonBehavior from "./behaviors/RadioButtonBehavior";

export default function RadioButton(props) {
  const {
    checked,
    name,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    ...otherProps
  } = props;

  const id = props.id || generateId("radio-button");

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
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          hasFocus={hasFocus}
          hasHover={hasHover}
          isPressed={isPressed}
          onBlur={handleBlur}
          // onChange={handleChange}
          // onClick={handleClick}
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
