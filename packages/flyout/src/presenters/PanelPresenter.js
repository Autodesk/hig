import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

// import "./PanelPresenter.scss";

export default function PanelPresenter({ children, onScroll }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet({ transitionStatus: null, anchorPoint: null }, resolvedRoles);

        return (
          <div className={cx([css(styles.panel), "hig__flyout-v1__panel"])} onScroll={onScroll}>
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
