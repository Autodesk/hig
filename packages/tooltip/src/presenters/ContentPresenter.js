import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function ContentPresenter({
  children,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  const { className } = otherProps;
  const contentClassName = createCustomClassNames(className, "tooltip-content");
  const styles = stylesheet({ stylesheet: customStylesheet }, {});

  return (
    <div className={cx([contentClassName, css(styles.content)])}>
      {children}
    </div>
  );
}

ContentPresenter.propTypes = {
  /** Content */
  children: PropTypes.node,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};
