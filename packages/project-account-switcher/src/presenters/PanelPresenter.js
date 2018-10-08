import React from "react";
import PropTypes from "prop-types";

import { Panel } from "@hig/flyout";

import "./PanelPresenter.scss";

export default function PanelPresenter({ innerRef, children }) {
  return (
    <Panel innerRef={innerRef}>
      <div className="hig__project-account-switcher__panel">{children}</div>
    </Panel>
  );
}

PanelPresenter.propTypes = {
  innerRef: PropTypes.func,
  children: PropTypes.node
};
