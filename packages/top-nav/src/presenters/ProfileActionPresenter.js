import React from "react";
import PropTypes from "prop-types";

import ActionPresenter from "./ActionPresenter";
import SeparatorPresenter from "./SeparatorPresenter";
import "./ProfileActionPresenter.scss";

/**
 * @todo Remove the <SeparatorPresenter /> and wrapping <div /> component
 */
export default function ProfileActionPresenter({ children }) {
  return (
    <div className="hig__top-nav__profile-action">
      <SeparatorPresenter />
      <ActionPresenter>
        <div className="hig__top-nav__profile-action__button-wrapper">
          {children}
        </div>
      </ActionPresenter>
    </div>
  );
}

ProfileActionPresenter.propTypes = {
  children: PropTypes.node
};
