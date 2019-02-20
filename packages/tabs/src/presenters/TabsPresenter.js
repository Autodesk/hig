import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import stylesheet from "./TabsPresenter.stylesheet";
import { alignments, AVAILABLE_ALIGNMENTS } from "../alignments";

export default function TabsPresenter({ align, children }) {
  const styles = stylesheet({ align });

  return <ul className={css(styles.tabs)}>{children}</ul>;
}

TabsPresenter.propTypes = {
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  children: PropTypes.node
};

TabsPresenter.defaultProps = {
  align: alignments.CENTER
};
