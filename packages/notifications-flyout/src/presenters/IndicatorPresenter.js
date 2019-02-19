import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import IconButton, { types } from "@hig/icon-button";
import { Notification24 } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import "@hig/icon-button/build/index.css";

import stylesheet from "./stylesheet";

export default function IndicatorPresenter(props) {
  const { count, onClick, title } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(resolvedRoles, props);
        return (
          <div className={css(styles.indicator)}>
            <IconButton
              onClick={onClick}
              icon={<Notification24 />}
              title={title}
              type={types.TRANSPARENT}
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
