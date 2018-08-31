import React from "react";
import PropTypes from "prop-types";

import "./ProfileActionPresenter.scss";

export default function ProfileActionPresenter({ children }) {
  return <div className="hig__top-nav__profile-action">{children}</div>;
}

ProfileActionPresenter.propTypes = {
  children: PropTypes.node
};
