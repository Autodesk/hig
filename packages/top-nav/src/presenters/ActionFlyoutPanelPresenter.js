import React from "react";
import PropTypes from "prop-types";
import { Panel } from "@hig/flyout";

import "./ActionFlyoutPanelPresenter.scss";

export default function ActionFlyoutPanelPresenter({
  children,
  handleScroll,
  innerRef
}) {
  return (
    <Panel innerRef={innerRef}>
      <div
        className="hig__top-nav__action-flyout-panel"
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
  innerRef: PropTypes.func
};

/* eslint-disable-next-line react/prop-types */
export function renderActionFlyoutPanel({ content, innerRef }) {
  return (
    <ActionFlyoutPanelPresenter innerRef={innerRef}>
      {content}
    </ActionFlyoutPanelPresenter>
  );
}
