import React from "react";
import { css } from "emotion";

const styles = {
  padding: "20px",
  width: "100%"
};

const Pagination = ({ pageDetails, children }) => (
  <div className={css(styles)}>{children(pageDetails)}</div>
);

export default Pagination;
