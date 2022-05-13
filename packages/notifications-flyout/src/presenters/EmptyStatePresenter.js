import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import Typography from "@hig/typography";

import Bell from "./Bell.svg";
import stylesheet from "./stylesheet";

export default function EmptyStatePresenter({
  message,
  stylesheet: customStylesheet,
}) {
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  return (
    <div className={css(styles.emptyState)}>
      <Bell role="presentation" className={css(styles.emptyStateImage)} />
      <Typography style={styles.emptyStateMessage}>{message}</Typography>
    </div>
  );
}

EmptyStatePresenter.defaultProps = {
  message: "You currently have no notifications",
};

EmptyStatePresenter.propTypes = {
  message: PropTypes.string,
  stylesheet: PropTypes.func,
};
