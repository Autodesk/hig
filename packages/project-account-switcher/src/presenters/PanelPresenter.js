import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";

import { Panel } from "@hig/flyout";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function PanelPresenter({
  innerRef,
  children,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  const styles = stylesheet({ stylesheet: customStylesheet });
  const { className } = otherProps;
  const panelClassName = createCustomClassNames(className, "panel");

  return (
    <Panel innerRef={innerRef}>
      <div className={cx([panelClassName, css(styles.panel)])}>{children}</div>
    </Panel>
  );
}

PanelPresenter.propTypes = {
  innerRef: PropTypes.func,
  children: PropTypes.node,
  stylesheet: PropTypes.func
};
