import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { Panel } from "@hig/flyout";
import ProgressRing from "@hig/progress-ring";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import {
  UNMOUNTED,
  EXITED,
  ENTERING,
  ENTERED,
  EXITING
} from "react-transition-group/Transition";

import stylesheet from "./stylesheet";

export default function PanelPresenter({
  children,
  heading,
  innerRef,
  listMaxHeight,
  loadingTransitionState,
  onScroll,
  refListWrapper,
  stylesheet: customStylesheet
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            transitionState: null,
            loadingTransitionState,
            customStylesheet
          },
          resolvedRoles
        );
        return (
          <Panel innerRef={innerRef}>
            <Typography elementType="header" style={styles.panelTitle}>
              {heading}
            </Typography>
            <section
              className={css(styles.panelContainer)}
              ref={refListWrapper}
              style={{ maxHeight: listMaxHeight }}
            >
              <div role="list" onScroll={onScroll}>
                {children}
              </div>
            </section>
            <footer className={css(styles.panelLoading)}>
              <ProgressRing size="s" />
            </footer>
          </Panel>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PanelPresenter.defaultProps = {
  heading: "Notifications"
};

PanelPresenter.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.node,
  innerRef: PropTypes.func.isRequired,
  listMaxHeight: PropTypes.string,
  loadingTransitionState: PropTypes.oneOf([
    UNMOUNTED,
    EXITED,
    ENTERING,
    ENTERED,
    EXITING
  ]),
  onScroll: PropTypes.func,
  refListWrapper: PropTypes.func
};
