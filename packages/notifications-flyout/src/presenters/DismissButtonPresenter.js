import React from "react";
import PropTypes from "prop-types";
import IconButton, { types } from "@hig/icon-button";
import { CloseNotification24 } from "@hig/icons";
import "@hig/icon-button/build/index.css";

import "./DismissButtonPresenter.scss";

export default function DismissButtonPresenter({ onClick, title }) {
  return (
    <div className="hig__notification-v1__dismiss-button">
      <IconButton
        onClick={onClick}
        icon={<CloseNotification24 />}
        title={title}
        type={types.TRANSPARENT}
      />
    </div>
  );
}

DismissButtonPresenter.defaultProps = {
  title: "Dismiss featured notification"
};

DismissButtonPresenter.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};
