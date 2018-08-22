import React from "react";
import PropTypes from "prop-types";
import IconButton, { names, types } from "@hig/icon-button";
import "@hig/icon-button/build/index.css";

import "./DismissButtonPresenter.scss";

export default function DismissButtonPresenter({ onClick, title }) {
  return (
    <div className="hig__notification-v1__dismiss-button">
      <IconButton
        onClick={onClick}
        name={names.CLOSE_NOTIFICATION}
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
