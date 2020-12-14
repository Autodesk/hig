import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { Panel } from "@hig/flyout";

import stylesheet from "./stylesheet";

export default function ActionFlyoutPanelPresenter({
  children,
  handleScroll,
  innerRef
}) {
  const styles = stylesheet({}, {});
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
