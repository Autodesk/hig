import React from 'react';
import styled from "@emotion/styled";

const PaginationHolder = styled.div`
  font-family: sans-serif;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
`;

const PaginationButton = styled.button`
  background-color: palevioletred;
  border: 1px solid palevioletred;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  padding: 10px;
`;

const PaginationLabel = styled.span`
  
`;

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
    <PaginationHolder>
      <PaginationLabel>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </PaginationLabel>
      <div>
        <PaginationButton onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</PaginationButton>
        <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>Next</PaginationButton>
      </div>
    </PaginationHolder>
  )
}

export default PaginationInput;
