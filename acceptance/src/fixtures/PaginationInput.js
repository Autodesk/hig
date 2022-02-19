import React from 'react';
import { css } from "emotion";

const styles = {
  PaginationHolder: {
    fontFamily: "sans-serif",
    margin: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "700px"
  },
  PaginationButton: {
    backgroundColor: "palevioletred",
    border: "1px solid palevioletred",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: "10px",
    color: "white",
    padding: "10px"
  },
};

const PaginationInput = (pageDetails) => {
  const {
    pageIndex, 
    pageOptions, 
    previousPage, 
    nextPage, 
    canPreviousPage, 
    canNextPage
  } = pageDetails?.passedData;
  
  return (
    <div className={css(styles.PaginationHolder)}>
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <div>
        <button
          className={css(styles.PaginationButton)}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className={css(styles.PaginationButton)}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationInput;
