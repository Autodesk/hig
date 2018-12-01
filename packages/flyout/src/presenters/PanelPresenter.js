import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function PanelPresenter({ children, onScroll }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { transitionStatus: null, anchorPoint: null },
          resolvedRoles
        );

        return (
          <div className={css(styles.panel)} onScroll={onScroll}>
            {children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PanelPresenter.propTypes = {
  children: PropTypes.node,
  onScroll: PropTypes.func
};
