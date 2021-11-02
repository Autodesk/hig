import { useState } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} State
 * @property {boolean} on
 */

const ToggleBehavior = props => {
  const [onHook, setOnHook] = useState(props.defaultOn);
  const isControlled = () => props.on !== undefined;
  /**
   * @returns {boolean}
   */
  const getChecked = () => {
    if (isControlled()) {
      return props.on;
    }

    return onHook;
  };

  /**
   * @param {boolean} on
   */
  const setChecked = onParam => {
    const { onChange, onKeyUp } = props;

    if (onChange) onChange(onParam);
    if (onKeyUp) onKeyUp(onParam);

    if (!isControlled()) {
      setOnHook(onParam);
    }
  };

  /**
   * @param {UIEvent} event
   */
  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const handleKeyUp = event => {
    if (event.keyCode === 13) {
      setChecked(!event.target.checked);
    }
  };

  const on = getChecked();

  return props.children({
    on,
    handleChange,
    handleKeyUp
  });
};

ToggleBehavior.displayName = "ToggleBehavior";

ToggleBehavior.propTypes = {
  /**
   * Turns on the toggle
   */
  on: PropTypes.bool,
  /**
   * Initially checks the checkbox, but allows user action to change it
   */
  defaultOn: PropTypes.bool,
  /**
   * Called when user changes the value of the field
   */
  onChange: PropTypes.func,
  /**
   * Called when user releases a keyboard key
   */
  onKeyUp: PropTypes.func,
  /**
   * Render prop
   */
  children: PropTypes.func
};

ToggleBehavior.defaultProps = {
  defaultOn: false
};

export default ToggleBehavior;
