import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./MenuPresenter.stylesheet";

export default function MenuPresenter(props) {
  const {
    children,
    innerRef,
    isOpen,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          {...otherProps}
          ref={innerRef}
          className={cx(css(stylesheet(props, resolvedRoles).menu), className)}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

MenuPresenter.propTypes = {
  innerRef: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  stylesheet: PropTypes.func
};
