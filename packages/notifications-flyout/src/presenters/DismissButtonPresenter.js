import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import IconButton from "@weave-design/icon-button";
import { CloseSUI } from "@weave-design/icons";
import { createCustomClassNames } from "@weave-design/utils";

import stylesheet from "./stylesheet";

export default function DismissButtonPresenter({
  hasHover,
  onClick,
  stylesheet: customStylesheet,
  title,
  ...otherProps
}) {
  const { className } = otherProps;
  const dismissButtonClassName = createCustomClassNames(
    className,
    "dismiss-button"
  );
  const styles = stylesheet({ hasHover, stylesheet: customStylesheet }, {});
  return (
    <div className={cx([dismissButtonClassName, css(styles.dismissButton)])}>
      <IconButton onClick={onClick} icon={<CloseSUI />} title={title} />
    </div>
  );
}

DismissButtonPresenter.defaultProps = {
  title: "Dismiss featured notification",
};

DismissButtonPresenter.propTypes = {
  hasHover: PropTypes.bool,
  onClick: PropTypes.func,
  stylesheet: PropTypes.func,
  title: PropTypes.string,
};
