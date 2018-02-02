import React from "react";
import PropTypes from "prop-types";
import { Typography as VanillaTypography } from "hig-vanilla";
import Typography from "../../../adapters/TypographyAdapter";

export default class Disabled extends React.PureComponent {
  render() {
    console.warn(
      "Component Disabled is deprecated and will be removed in the next version"
    );
    const { children, ...remainingProps } = this.props;
    return <Typography type="Disabled" text={children} {...remainingProps} />;
  }
}
Disabled.propTypes = {
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
  color: PropTypes.oneOf(VanillaTypography.VALID_COLORS),
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
  size: PropTypes.oneOf(VanillaTypography.VALID_SIZES)
};
