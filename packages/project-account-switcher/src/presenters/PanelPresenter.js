import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { Panel } from "@hig/flyout";

import stylesheet from "./stylesheet";

export default function PanelPresenter({ innerRef, children }) {
  const styles = stylesheet();

  return (
    <Panel innerRef={innerRef}>
      <div className={css(styles.panel)}>{children}</div>
    </Panel>
  );
}

PanelPresenter.propTypes = {
  innerRef: PropTypes.func,
  children: PropTypes.node
};
