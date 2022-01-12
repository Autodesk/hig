// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const FocusBehavior = props => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = event => {
    if (props.onFocus) {
      props.onFocus(event);
    }

    if (!event.defaultPrevented) {
      setHasFocus(true);
    }
  };

  const handleBlur = event => {
    if (props.onBlur) {
      props.onBlur(event);
    }

    if (!event.defaultPrevented) {
      setHasFocus(false);
    }
  };

  return props.children({
    hasFocus,
    onFocus: handleFocus,
    onBlur: handleBlur
  });
};

FocusBehavior.propTypes = {
  children: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default FocusBehavior;
