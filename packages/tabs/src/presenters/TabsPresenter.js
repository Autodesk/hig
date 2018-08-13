import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { alignments, AVAILABLE_ALIGNMENTS } from "../alignments";

import "./TabsPresenter.scss";

const modifiersByAlignment = {
  [alignments.LEFT]: "hig__tabs--align-left",
  [alignments.CENTER]: "hig__tabs--align-center",
  [alignments.RIGHT]: "hig__tabs--align-right"
};

export default function TabsPresenter({ align, children }) {
  const classes = cx("hig__tabs", modifiersByAlignment[align]);

  return <ul className={classes}>{children}</ul>;
}

TabsPresenter.propTypes = {
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  children: PropTypes.node
};

TabsPresenter.defaultProps = {
  align: alignments.CENTER
};
