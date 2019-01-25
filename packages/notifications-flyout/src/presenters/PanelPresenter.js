import React from "react";
import PropTypes from "prop-types";
import { Panel } from "@hig/flyout";
import cx from "classnames";
import ProgressRing from "@hig/progress-ring";
import {
  UNMOUNTED,
  EXITED,
  ENTERING,
  ENTERED,
  EXITING
} from "react-transition-group/Transition";

import "./PanelPresenter.scss";

const loadingModifiersByTransitionState = {
  [ENTERED]: "hig__notifications-flyout__panel__loading--open",
  [ENTERING]: "hig__notifications-flyout__panel__loading--open"
};

export default function PanelPresenter({
  children,
  heading,
  innerRef,
  listMaxHeight,
  loadingTransitionState,
  onScroll,
  refListWrapper
}) {
  const loadingClasses = cx(
    "hig__notifications-flyout__panel__loading",
    loadingModifiersByTransitionState[loadingTransitionState]
  );

  return (
    <Panel innerRef={innerRef}>
      <header className="hig__notifications-flyout__panel__title">
        {heading}
      </header>
      <section
        className="hig__notifications-flyout__panel__container"
        ref={refListWrapper}
        style={{ maxHeight: listMaxHeight }}
      >
        <div role="list" onScroll={onScroll}>
          {children}
        </div>
      </section>
      <footer className={loadingClasses}>
        <ProgressRing size="s" />
      </footer>
    </Panel>
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
