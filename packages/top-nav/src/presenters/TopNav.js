import React from "react";
import PropTypes from "prop-types";

export default function TopNav({ leftActions, rightActions, logo }) {
  return (
    <div className="hig__top-nav">
      {leftActions}
      <div className="hig__top-nav__item">
        <div className="hig__top-nav__logo-wrapper">{logo}</div>
      </div>
      <div className="hig__top-nav__spacer" />
      {rightActions}
    </div>
  );
}

TopNav.propTypes = {
  /** Actions to render to the left of the logo */
  leftActions: PropTypes.node,
  /** Actions to render on the right of the bar */
  rightActions: PropTypes.node,
  /** Content to render as the logo */
  logo: PropTypes.node
};
