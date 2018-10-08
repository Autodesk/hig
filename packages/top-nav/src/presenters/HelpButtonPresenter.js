import React from "react";
import PropTypes from "prop-types";

import IconButton, { names, types } from "@hig/icon-button";
import "@hig/icon-button/build/index.css";

export default function HelpButtonPresenter({ onClick, title }) {
  return (
    <IconButton
      name={names.HELP}
      onClick={onClick}
      title={title}
      type={types.TRANSPARENT}
    />
  );
}

HelpButtonPresenter.defaultProps = {
  title: "View help"
};

HelpButtonPresenter.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};
