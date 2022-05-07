import { useState } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} State
 * @property {boolean} checked
 */

const CheckboxBehavior = (props) => {
  const { onClick: handleClick, defaultChecked, children } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const isControlled = () => props.checked !== undefined;

  /**
   * @returns {boolean}
   */
  const getChecked = () => {
    if (isControlled()) {
      return props.checked;
    }

    return checked;
  };

  /**
   * @param {boolean} checked
   */
  const setBehaviorChecked = (value) => {
    const { onChange } = props;
    if (onChange) onChange(value);

    if (!isControlled()) {
      setChecked(value);
    }
  };

  /**
   * @param {UIEvent} event
   */
  const handleChange = (event) => {
    setBehaviorChecked(event.target.checked);
  };

  return children({
    checked: getChecked(),
    handleChange,
    handleClick,
  });
};

CheckboxBehavior.propTypes = {
  /**
   * Checks the checkbox
   */
  checked: PropTypes.bool,
  /**
   * Initially checks the checkbox, but allows user action to change it
   */
  defaultChecked: PropTypes.bool,
  /**
   * Called when user clicks on the field
   */
  onClick: PropTypes.func,
  /**
   * Called when user changes the value of the field
   */
  onChange: PropTypes.func,
  /**
   * Render prop
   */
  children: PropTypes.func,
};

CheckboxBehavior.defaultProps = {
  defaultChecked: false,
};

export default CheckboxBehavior;
