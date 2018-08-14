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
  autoComplete: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  inputMode: PropTypes.oneOf(INPUT_MODES),
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  pattern: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  spellCheck: PropTypes.bool,
  tabIndex: PropTypes.string,
  value: PropTypes.string
};
