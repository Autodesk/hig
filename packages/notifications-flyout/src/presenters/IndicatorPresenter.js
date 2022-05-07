import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import IconButton from "@hig/icon-button";
import { Notification16, Notification24 } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default function IndicatorPresenter(props) {
  const { count, onClick, title, ...otherProps } = props;
  const { className } = otherProps;
  const indicatorClassName = createCustomClassNames(className, "indicator");
  const indicatorCountClassName = createCustomClassNames(
    className,
    "indicator-count"
  );

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles);
        const NotificationIcon =
          metadata.densityId === "high-density"
            ? Notification16
            : Notification24;
        return (
          <div className={cx([indicatorClassName, css(styles.indicator)])}>
            <IconButton
              onClick={onClick}
              icon={<NotificationIcon />}
              title={title}
            />
            <div
              className={cx([
                indicatorCountClassName,
                css(styles.indicatorCount),
              ])}
            >
              {count}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

IndicatorPresenter.defaultProps = {
  title: "View notifications",
};

IndicatorPresenter.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
