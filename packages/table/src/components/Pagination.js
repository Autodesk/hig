import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = {
  padding: "20px",
  width: "100%"
};

const Pagination = ({ pageDetails, children }) => (
  <div className={css(styles)}>{children(pageDetails)}</div>
);

Pagination.propTypes = {
  children: PropTypes.func,
  pageDetails: PropTypes.shape({
    pageIndex: PropTypes.number,
    pageOptions: PropTypes.number,
    previousPage: PropTypes.number,
    nextPage: PropTypes.number,
    canPreviousPage: PropTypes.bool,
    canNextPage: PropTypes.bool
  })
};

export default Pagination;
