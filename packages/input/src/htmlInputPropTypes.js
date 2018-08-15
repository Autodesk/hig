import PropTypes from "prop-types";

const INPUT_MODES = [
  "none",
  "text",
  "decimal",
  "numeric",
  "tel",
  "search",
  "email",
  "url"
];

export default {
  /**
   * Indicates if the input can be automatically completed by the browser
   */
  autoComplete: PropTypes.bool,
  /**
   * The initial value of the control
   */
  defaultValue: PropTypes.string,
  /**
   * Prevents the user from interacting with the input
   */
  disabled: PropTypes.bool,
  /**
   * A hint to browsers for which virtual keyboard to display
   */
  inputMode: PropTypes.oneOf(INPUT_MODES),
  /**
   * The maximum number of characters that the user can enter
   */
  maxLength: PropTypes.string,
  /**
   * The minimum number of characters that the user can enter
   */
  minLength: PropTypes.string,
  /**
   * Submitted with the control's value as part of the form data
   */
  name: PropTypes.string,
  /**
   * Fired when an element has lost focus
   */
  onBlur: PropTypes.func,
  /**
   * Fired when the value is changed by the user
   */
  onChange: PropTypes.func,
  /**
   * Fired when an element has received focus
   */
  onFocus: PropTypes.func,
  /**
   * fired when a pointing device is moved over the element
   */
  onMouseEnter: PropTypes.func,
  /**
   * Fired when the pointer of a pointing device is moved out of an element
   */
  onMouseLeave: PropTypes.func,
  /**
   * A regular expression that the control's value is checked against
   */
  pattern: PropTypes.string,
  /**
   * Prevents the user from modifying the value of the input
   */
  readOnly: PropTypes.bool,
  /**
   * Specifies that the user must fill in a value before submitting a form
   */
  required: PropTypes.bool,
  /**
   * Indicates that the element needs to have its spelling and grammar checked
   */
  spellCheck: PropTypes.bool,
  /**
   * The position of the element in the tabbing navigation order for the current document
   */
  tabIndex: PropTypes.string,
  /**
   * The value of the control
   */
  value: PropTypes.string
};
