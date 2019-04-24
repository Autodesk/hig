import React from "react";
import PropTypes from "prop-types";

import IconButton from "@hig/icon-button";
import { Help16, Help24 } from "@hig/icons";
import ThemeContext from "@hig/theme-context";

export default function HelpButtonPresenter({ onClick, title }) {
  return (
    <ThemeContext.Consumer>
      {({ metadata }) => {
        const HelpIcon =
          metadata.densityId === "high-density" ? Help16 : Help24;
        return (
          <IconButton icon={<HelpIcon />} onClick={onClick} title={title} />
        );
      }}
    </ThemeContext.Consumer>
  );
}

HelpButtonPresenter.defaultProps = {
  title: "View help"
};

HelpButtonPresenter.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};
