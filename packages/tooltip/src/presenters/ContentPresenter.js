import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default function ContentPresenter({ children }) {
  const styles = stylesheet();

  return <div className={css(styles.content)}>{children}</div>;
}

ContentPresenter.propTypes = {
  /** Content */
  children: PropTypes.node
};
