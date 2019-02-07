import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./MenuPresenter.stylesheet";

export default function MenuPresenter(props) {
  const { innerRef, isOpen, children, ...otherProps } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          ref={innerRef}
          className={css(stylesheet(props, resolvedRoles))}
          {...otherProps}
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
  children: PropTypes.node
};
