import React from "react";
import PropTypes from "prop-types";

import IconButton from "@weave-design/icon-button";
import { List16, List24 } from "@weave-design/icons";
import ThemeContext from "@weave-design/theme-context";

export default function NavButtonPresenter({
  icon,
  onClick,
  title,
  ...otherProps
}) {
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
            {...otherProps}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

NavButtonPresenter.defaultProps = {
  title: "",
};

NavButtonPresenter.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
