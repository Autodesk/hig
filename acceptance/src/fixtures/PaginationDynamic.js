import React from 'react';
import styled from "@emotion/styled";
import { tableContent, tableContentTwo } from './DataSourceMock';

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

const PaginationDynamic = () => (
    <PaginationHolder>
        <PaginationLabel>
        </PaginationLabel>
    </PaginationHolder>
)


export default PaginationDynamic;
