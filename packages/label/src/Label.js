import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import { availableVariants, variants } from "./constants";
import stylesheet from "./stylesheet";

const Label = props => {
  const {
    children,
    disabled,
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
            disabled,
            stylesheet: customStylesheet,
            variant
          },
          resolvedRoles
        );

        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
          <label {...otherProps} className={cx([className, css(styles.label)])}>
            {children}
          </label>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Label.displayName = "Label";

Label.propTypes = {
  /**
   * Content of the label, including the label text
   */
  children: PropTypes.node,
  /**
   * Dims label text, signifying the related input or control is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * The visual variant of the label
   */
  variant: PropTypes.oneOf(availableVariants)
};

Label.defaultProps = {
  variant: variants.SIDE
};

export default Label;
