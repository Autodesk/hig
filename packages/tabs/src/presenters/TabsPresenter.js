import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./TabsPresenter.stylesheet";
import { alignments, AVAILABLE_ALIGNMENTS } from "../alignments";

export default function TabsPresenter({ align, children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet({ align }, resolvedRoles);

        return <ul className={css(styles.tabs)}>{children}</ul>;
      }}
    </ThemeContext.Consumer>
  );
}

TabsPresenter.propTypes = {
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  children: PropTypes.node
};

TabsPresenter.defaultProps = {
  align: alignments.CENTER
};
