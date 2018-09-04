import React from "react";
import PropTypes from "prop-types";

import Bell from "./Bell.svg";
import "./EmptyStatePresenter.scss";

export default function EmptyStatePresenter({ message }) {
  return (
    <div className="hig__notification-flyout-v1__empty-state">
      <Bell
        role="presentation"
        className="hig__notification-flyout-v1__empty-state-image"
      />
      <p className="hig__notification-flyout-v1__empty-state-message">
        {message}
      </p>
    </div>
  );
}

EmptyStatePresenter.defaultProps = {
  message: "You currently have no notifications"
};

EmptyStatePresenter.propTypes = {
  message: PropTypes.string
};
