import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import ActionPresenter from "./ActionPresenter";
import SeparatorPresenter from "./SeparatorPresenter";
import stylesheet from "./stylesheet";

/**
 * @todo Remove the <SeparatorPresenter /> and wrapping <div /> component
 */
export default function ProfileActionPresenter({
  children,
  stylesheet: customStylesheet
}) {
  const styles = stylesheet({ stylesheet: customStylesheet }, {});
  return (
    <div className={css(styles.topNavProfileAction)}>
      <SeparatorPresenter />
      <ActionPresenter stylesheet={customStylesheet}>
        <div className={css(styles.topNavProfileActionButtonWrapper)}>
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
