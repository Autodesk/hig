import React from "react";
import { cx, css } from "emotion";
import PropTypes from "prop-types";
import { createCustomClassNames } from "@hig/utils";
import stylesheet from "./ContentPresenter.stylesheet";

export default function ContentPresenter({ children, ...otherProps }) {
  const styles = stylesheet();
  const customClassName = createCustomClassNames(
    otherProps.className,
    "content"
  );

  return (
    <div className={cx(css(styles.content), customClassName)}>{children}</div>
  );
}

ContentPresenter.propTypes = {
  children: PropTypes.node
};
