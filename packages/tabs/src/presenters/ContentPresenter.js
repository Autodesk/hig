import React from "react";
import { cx, css } from "emotion";
import PropTypes from "prop-types";
import { createCustomClassNames } from "@hig/utils";
import stylesheet from "./Tab.stylesheet";

export default function ContentPresenter({
  children,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  const { className } = otherProps;
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  const customClassName = createCustomClassNames(className, "content");
  return (
    <div className={cx(css(styles.content), customClassName)}>{children}</div>
  );
}

ContentPresenter.propTypes = {
  children: PropTypes.node,
  stylesheet: PropTypes.func
};
