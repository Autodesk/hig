import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@weave-design/theme-context";
import { css, cx } from "emotion";
import stylesheet from "./Divider.stylesheet";
import { AVAILABLE_ORIENTATIONS, AVAILABLE_VARIANTS } from "./constants";

const Divider = (props) => {
  const {
    display,
    length,
    orientation,
    stylesheet: customStylesheet,
    variant,
    ...otherProps
  } = props;
  const { className } = otherProps;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            display,
            length,
            orientation,
            stylesheet: customStylesheet,
            variant,
          },
          resolvedRoles
        );

        return <div className={cx(css(styles.divider), className)} />;
      }}
    </ThemeContext.Consumer>
  );
};

Divider.displayName = "Divider";

Divider.propTypes = {
  /**
   * Specifies the the height/width of the divider depending on the orientation.
   * Takes any value that can be passed in the css properties height and width.
   */
  length: PropTypes.string.isRequired,
  /**
   * Orientation of the divider.
   */
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  /**
   * Variant of the divider.
   */
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  /**
   * Value passed into the css display property
   */
  display: PropTypes.string,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
};

Divider.defaultProps = {
  orientation: "horizontal",
  variant: "lightweight",
};

export default Divider;
