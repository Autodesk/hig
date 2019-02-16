import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import ActionPresenter from "./ActionPresenter";
import SeparatorPresenter from "./SeparatorPresenter";
import stylesheet from "./stylesheet";

/**
 * @todo Remove the <SeparatorPresenter /> and wrapping <div /> component
 */
export default function ProfileActionPresenter({ children }) {
  const styles = stylesheet();
  return (
    <div className={css(styles.topNavProfileAction)}>
      <SeparatorPresenter />
      <ActionPresenter>
        <div className={css(styles.topNavProfileActionButtonWrapper)}>
          {children}
        </div>
      </ActionPresenter>
    </div>
  );
}

ProfileActionPresenter.propTypes = {
  children: PropTypes.node
};
