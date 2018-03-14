import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";
import { _VALID_COLORS, _VALID_SIZES } from "./_constants";

export default class Body extends React.PureComponent {
  render() {
    const { children, ...remainingProps } = this.props;
    return <Typography type="body" text={children} {...remainingProps} />;
  }
}
Body.propTypes = {
  /**
   * Whether to render bold text
   */
  bold: PropTypes.bool,
  /**
   * Text to show inside the typography
   */
  children: PropTypes.string.isRequired,
  /**
   * Colors the text with one of the supported HIG colors
   */
  color: PropTypes.oneOf(_VALID_COLORS),
  /**
   * Whether to show text as disabled
   */
  disabled: PropTypes.bool,
  /**
   * An opacity value to modify the color, between 0.0 and 1.0
   */
  opacity: PropTypes.number,
  /**
   * Sizes the text with one of the supported modifiers
   */
  size: PropTypes.oneOf(_VALID_SIZES)
};
