import { useState } from "react";
import PropTypes from "prop-types";

const PressedBehavior = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = (event) => {
    if (props.onMouseDown) {
      props.onMouseDown(event);
    }

    if (!event.defaultPrevented) {
      setIsPressed(true);
    }
  };

  const handleMouseLeave = (event) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(event);
    }

    if (!event.defaultPrevented) {
      setIsPressed(false);
    }
  };

  const handleMouseUp = (event) => {
    if (props.onMouseUp) {
      props.onMouseUp(event);
    }

    if (!event.defaultPrevented) {
      setIsPressed(false);
    }
  };

  return props.children({
    isPressed,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onPressedMouseLeave: handleMouseLeave,
  });
};

PressedBehavior.displayName = "PressedBehavior";

PressedBehavior.propTypes = {
  children: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
};

export default PressedBehavior;
