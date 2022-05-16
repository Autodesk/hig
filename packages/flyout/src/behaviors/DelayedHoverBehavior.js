import { useState, useRef } from "react";
import PropTypes from "prop-types";

const HoverBehavior = (props) => {
  const { openOnHoverDelay, onMouseEnter } = props;
  const [hasHover, setHasHover] = useState(false);
  const timerRef = useRef(null);

  const focusTimeout = (event) => {
    timerRef.current = setTimeout(() => {
      setHasHover(true);
      onMouseEnter(event);
    }, openOnHoverDelay);
  };

  const handleFocus = (event) => {
    if (onMouseEnter) {
      focusTimeout(event);
    }
    setHasHover(true);
  };

  const handleBlur = (event) => {
    clearTimeout(timerRef.current);
    setHasHover(false);
    if (props.onMouseLeave) {
      props.onMouseLeave(event);
    }
  };

  return props.children({
    hasHover,
    onMouseEnter: handleFocus,
    onMouseLeave: handleBlur,
  });
};

HoverBehavior.displayName = "HoverBehavior";

HoverBehavior.propTypes = {
  /**
   * Generally the Flyout target and presenter
   */
  children: PropTypes.func.isRequired,
  /**
   * Amount of time between mouse enter is reported and when
   * onMouseEnter event should fire
   */
  openOnHoverDelay: PropTypes.number,
  /**
   * Function called when the user enters the visual space
   * occupied by the component
   */
  onMouseEnter: PropTypes.func,
  /**
   * Function called when the user leaves the visual space
   * occupied by the component
   */
  onMouseLeave: PropTypes.func,
};

export default HoverBehavior;
