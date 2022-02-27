import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import {
  AVAILABLE_COLORS,
  AVAILABLE_SIZES,
  AVAILABLE_VARIANTS,
} from "./constants";

import stylesheet from "./Badge.stylesheet";

const Badge = ({
  color = "green",
  customColors,
  icon,
  label,
  size = "l",
  stylesheet: customStylesheet,
  variant = "dot",
  ...otherProps
}) => {
  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          {
            color,
            customColors,
            size,
            stylesheet: customStylesheet,
            variant,
          },
          resolvedRoles,
          metadata
        );

        return (
          <div className={cx(css(styles.badge), className)}>
            {variant === "icon" && icon}
            {variant === "text" && label}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Badge.displayName = "Badge";

Badge.propTypes = {
  /**
   * Background color of the component
   * If you choose custom, you should include the customColors prop
   */
  color: PropTypes.oneOf(AVAILABLE_COLORS),
  /**
   * Specifies the background-color, font color, and icon color if
   * you choose "custom" for the color prop.
   */
  customColors: PropTypes.shape({
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
  }),
  /**
   * The icon to be displayed if you choose "icon" as the variant.
   * It is up to you to select the correct size icon.
   */
  icon: PropTypes.node,
  /**
   * The label text to be displayed if you choose "text" as the variant.
   */
  label: PropTypes.node,
  /**
   * The size of the badge, this prop is only avaiable for
   * "dot" and "icon" variants. It is ignored for the "text" variant.
   */
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * The type of badge you would like to use
   */
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default Badge;
