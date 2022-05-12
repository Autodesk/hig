// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const HoverBehavior = (props) => {
  const [hasHover, setHasHover] = useState(false);

  const handleFocus = (event) => {
    if (props.onMouseEnter) {
      props.onMouseEnter(event);
    }

    if (!event.defaultPrevented) {
      setHasHover(true);
    }
  };

  const handleBlur = (event) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(event);
    }

    if (!event.defaultPrevented) {
      setHasHover(false);
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
  children: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default HoverBehavior;
