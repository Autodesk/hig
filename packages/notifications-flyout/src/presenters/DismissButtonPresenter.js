import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import IconButton from "@hig/icon-button";
import { CloseSUI } from "@hig/icons";

import stylesheet from "./stylesheet";

export default function DismissButtonPresenter({ hasHover, onClick, title }) {
  const styles = stylesheet({}, { hasHover });
  return (
    <div className={css(styles.dismissButton)}>
      <IconButton onClick={onClick} icon={<CloseSUI />} title={title} />
    </div>
  );
}

DismissButtonPresenter.defaultProps = {
  title: "Dismiss featured notification"
};

DismissButtonPresenter.propTypes = {
  hasHover: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string
};
