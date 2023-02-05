import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import Typography from "@hig/typography";
import { createCustomClassNames } from "@hig/utils";
import ContentPresenter from "./ContentPresenter";
import stylesheet from "./stylesheet";

export default function TextPresenter({
  children,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const typographyCustomStyles = {
          color: resolvedRoles["tooltip.title.fontColor"],
          fontSize: resolvedRoles["tooltip.title.fontSize"],
        };
        const styles = stylesheet(
          { stylesheet: customStylesheet },
          resolvedRoles
        );
        const { className } = otherProps;
        const textContentClassName = createCustomClassNames(
          className,
          "tooltip-text-content"
        );

        return (
          <ContentPresenter stylesheet={customStylesheet}>
            <span
              className={cx([textContentClassName, css(styles.textContent)])}
            >
              <Typography elementType="span" style={typographyCustomStyles}>
                {children}
              </Typography>
            </span>
          </ContentPresenter>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TextPresenter.defaultProps = {
  children: "",
};

TextPresenter.propTypes = {
  /** Text content */
  children: PropTypes.node,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};
