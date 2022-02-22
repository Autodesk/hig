import React, { useCallback } from "react";

const TileBehavior = (props) => {
  const handleBlur = useCallback((event) => {
    if (onBlur) {
      onBlur(event);
    }
  }, []);

  const handleFocus = useCallback((event) => {
    if (onFocus) {
      onFocus(event);
    }
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  }, []);

	return props.children({
    handleBlur,
    handleFocus,
    handleKeyDown
  });
}

export default TileBehavior;
