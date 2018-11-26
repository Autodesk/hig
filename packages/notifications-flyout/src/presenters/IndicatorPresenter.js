import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import IconButton, { types } from "@hig/icon-button";
import { Notification24 } from "@hig/icons";
import "@hig/icon-button/build/index.css";
import "@hig/styles/build/fonts.css";

import "./IndicatorPresenter.scss";

export default function IndicatorPresenter(props) {
  const { count, onClick, showCount, title } = props;
  const countClasses = cx("hig__notifications-flyout__indicator__count", {
    "hig__notifications-flyout__indicator__count--hide": !showCount
  });

  return (
    <div className="hig__notifications-flyout__indicator">
      <IconButton
        onClick={onClick}
        icon={<Notification24 />}
        title={title}
        type={types.TRANSPARENT}
      />
      <div className={countClasses}>{count}</div>
    </div>
  );
}

IndicatorPresenter.defaultProps = {
  title: "View notifications"
};

IndicatorPresenter.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  showCount: PropTypes.bool,
  title: PropTypes.string
};
