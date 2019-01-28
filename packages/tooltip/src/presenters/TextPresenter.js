import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import Typography from "@hig/typography";

import ContentPresenter from "./ContentPresenter";
import stylesheet from "./stylesheet";

export default function TextPresenter({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const typographyCustomColor = resolvedRoles["tooltip.textColor"];
        const typographyCustomStyles = { color: typographyCustomColor };
        const styles = stylesheet();

        return (
          <ContentPresenter>
            <span className={css(styles.textContent)}>
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
  children: ""
};

TextPresenter.propTypes = {
  /** Text content */
  children: PropTypes.string
};
