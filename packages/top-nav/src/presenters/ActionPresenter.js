import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default function ActionPresenter({
  children,
  stylesheet: customStylesheet
}) {
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  return <div className={css(styles.topNavAction)}>{children}</div>;
}

ActionPresenter.propTypes = {
  /** Content to render inside an action */
  children: PropTypes.node,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};
