import React from "react";
import PropTypes from "prop-types";

import IconButton, { types } from "@hig/icon-button";
import { Help24 } from "@hig/icons";
import "@hig/icon-button/build/index.css";

export default function HelpButtonPresenter({ onClick, title }) {
  return (
    <IconButton
      icon={<Help24 />}
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
