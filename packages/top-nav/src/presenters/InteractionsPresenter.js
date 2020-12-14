import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default function InteractionsPresenter({
  children,
  innerRef,
  stylesheet: customStylesheet
}) {
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  return (
    <div className={css(styles.topNavInteractions)} ref={innerRef}>
      {children}
    </div>
  );
}

InteractionsPresenter.propTypes = {
  /** Actions to be rendered */
  children: PropTypes.node,
  /** Reference the wrappinf <div /> element */
  innerRef: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};
