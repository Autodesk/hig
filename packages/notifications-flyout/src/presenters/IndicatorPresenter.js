import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import IconButton from "@hig/icon-button";
import { Notification16, Notification24 } from "@hig/icons";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function IndicatorPresenter(props) {
  const { count, onClick, title } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(resolvedRoles, props);
        const NotificationIcon =
          metadata.densityId === "high-density"
            ? Notification16
            : Notification24;
        return (
          <div className={css(styles.indicator)}>
            <IconButton
              onClick={onClick}
              icon={<NotificationIcon />}
              title={title}
            />
            <div className={css(styles.indicatorCount)}>{count}</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

IndicatorPresenter.defaultProps = {
  title: "View notifications"
};

IndicatorPresenter.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string
};
