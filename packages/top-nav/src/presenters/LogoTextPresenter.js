import React from "react";
import PropTypes from "prop-types";
import Typography from "@hig/typography";

import stylesheet from "./stylesheet";

export default function LogoTextPresenter({ children }) {
  const styles = stylesheet();
  return (
    <Typography variant="h1" style={styles.topNavLogoTextPresenter}>
      {children}
    </Typography>
  );
}

LogoTextPresenter.propTypes = {
  /** Logo content */
  children: PropTypes.node
};
