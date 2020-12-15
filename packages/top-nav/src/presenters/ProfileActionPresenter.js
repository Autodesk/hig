import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { createCustomClassNames } from "@hig/utils";

import ActionPresenter from "./ActionPresenter";
import SeparatorPresenter from "./SeparatorPresenter";
import stylesheet from "./stylesheet";

/**
 * @todo Remove the <SeparatorPresenter /> and wrapping <div /> component
 */
export default function ProfileActionPresenter({
  children,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  const { className } = otherProps;
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  const topNavProfileActionButtonWrapperClassName = createCustomClassNames(
    className,
    "top-nav-profile-action-button-wrapper"
  );

  return (
    <div className={css(styles.topNavProfileAction)}>
      <SeparatorPresenter />
      <ActionPresenter className={className} stylesheet={customStylesheet}>
        <div
          className={cx([
            topNavProfileActionButtonWrapperClassName,
            css(styles.topNavProfileActionButtonWrapper)
          ])}
        >
          {children}
        </div>
      </ActionPresenter>
    </div>
  );
}

ProfileActionPresenter.propTypes = {
  children: PropTypes.node,
  stylesheet: PropTypes.func
};
