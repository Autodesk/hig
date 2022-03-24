import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = {
  marginBottom: "20px"
};

const GlobalFilter = ({ filter, setFilter, children }) => (
  <div className={css(styles)}>{children({ filter, setFilter })}</div>
);

GlobalFilter.propTypes = {
  children: PropTypes.func,
  filter: PropTypes.string,
  setFilter: PropTypes.func
};

export default GlobalFilter;
