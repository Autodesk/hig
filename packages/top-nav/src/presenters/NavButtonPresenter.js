import React from "react";
import PropTypes from "prop-types";

import IconButton from "@hig/icon-button";
import { List16, List24 } from "@hig/icons";
import ThemeContext from "@hig/theme-context";

export default function NavButtonPresenter({ icon, onClick, title }) {
  return (
    <ThemeContext.Consumer>
      {({ metadata }) => {
        const NavDefaultIcon =
          metadata.densityId === "high-density" ? List16 : List24;
        return (
          <IconButton
            icon={icon || <NavDefaultIcon />}
            onClick={onClick}
            title={title}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

NavButtonPresenter.defaultProps = {
  title: ""
};

NavButtonPresenter.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  title: PropTypes.string
};
