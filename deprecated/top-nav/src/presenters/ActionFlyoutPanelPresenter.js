import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { Panel } from "@hig/flyout";

import stylesheet from "./stylesheet";

export default function ActionFlyoutPanelPresenter({
  children,
  handleScroll,
  innerRef,
  stylesheet: customStylesheet,
}) {
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  return (
    <Panel innerRef={innerRef}>
      <div
        className={css(styles.topNavActionFlyoutPanel)}
        onScroll={handleScroll}
      >
        {children}
      </div>
    </Panel>
  );
}

ActionFlyoutPanelPresenter.propTypes = {
  children: PropTypes.node,
  handleScroll: PropTypes.func,
  innerRef: PropTypes.func,
  stylesheet: PropTypes.func,
};

/* eslint-disable-next-line react/prop-types, prettier/prettier */
export function renderActionFlyoutPanel({ content, innerRef, stylesheet: customStylesheet }) {
  return (
    <ActionFlyoutPanelPresenter
      innerRef={innerRef}
      stylesheet={customStylesheet}
    >
      {content}
    </ActionFlyoutPanelPresenter>
  );
}
