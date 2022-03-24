import React from 'react';
import { css } from "emotion";
import { tableContent, tableContentTwo } from './DataSourceMock';

const styles = {
  fontFamily: "sans-serif",
  margin: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "700px"
};

const PaginationDynamic = () => (
    <div className={css(styles)}>
        <span />
    </div>
)


export default PaginationDynamic;
