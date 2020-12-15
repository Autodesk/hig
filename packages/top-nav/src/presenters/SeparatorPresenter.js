import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function SeparatorPresenter({ stylesheet: customStylesheet }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { stylesheet: customStylesheet },
          resolvedRoles
        );
        return (
          <div
            role="presentation"
            aria-hidden
            className={css(styles.topNavSeparator)}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

SeparatorPresenter.propTypes = {
  stylesheet: PropTypes.func
};
