import React from "react";
import { css } from "emotion";

const styles = {
  marginBottom: "20px"
};

const GlobalFilter = ({ filter, setFilter, children }) => (
  <div className={css(styles)}>{children({ filter, setFilter })}</div>
);

export default GlobalFilter;
