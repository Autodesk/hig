import React from 'react';
import { generateId } from "@hig/utils"
import SortColumns from "./SortColumns";
import DataGroupComponent from "./DataGroupComponent";
import {tableContent, tableContentTwo, tableContentThree} from "./DataSourceMock";

export const TABLE_OBJECT_GROUP = {
  meta: {
    stickyItems: {
      isStickyHeader: true,
      isStickyColumns: true,
    },
    dataGroupComponent: props => <DataGroupComponent passedData={props} />,
    formatDate: false, 
  },
  columns: [
      {
        Header: "Autodesk ID",
        accessor: "adskid",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Administrator",
        accessor: "admin",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Author",
        accessor: "author",
        disableFilters: true,
        width: 180
      },
  ],
  groupNames: ['Revit Model', 'CAD Formats', 'Sample Empty', 'Coordination Model'],
  data: [
    tableContent.data.map((row, index) => {
      return {
        "id": row.id,
        "adskid": generateId('ADSK'),
        "admin": index % 2 === 0 ? "true" : "false",
        "status": row.status,
        "date": row.date,
        "author": row.author,
      };
    }),
    tableContentThree.data.map((row, index) => {
      return {
        "id": row.id,
        "adskid": generateId('ADSK'),
        "admin": index % 2 === 0 ? "true" : "false",
        "status": row.status,
        "date": row.date,
        "author": row.author,
      };
    }),
    [],
    tableContentTwo.data.map((row, index) => {
      return {
        "id": row.id,
        "adskid": generateId('ADSK'),
        "admin": index % 2 === 0 ? "true" : "false",
        "status": row.status,
        "date": row.date,
        "author": row.author,
      };
    })
  ],
};

export const TABLE_OBJECT_GROUP_SORT = {
  meta: {
    stickyItems: {
      isStickyHeader: true,
      isStickyColumns: true,
    },
    columnShowHide: true,
    sortColumns: props => <SortColumns passedData={props} />,
    dataGroupComponent: props => <DataGroupComponent passedData={props} />,
    formatDate: false, 
  },
  columns: [
      {
        Header: "Autodesk ID",
        accessor: "adskid",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Administrator",
        accessor: "admin",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Author",
        accessor: "author",
        disableFilters: true,
        width: 180
      },
  ],
  groupNames: ['Revit Model', 'CAD Formats', 'Sample Empty', 'Coordination Model'],
  data: [
    tableContent.data.map((row, index) => {
      return {
        "id": row.id,
        "adskid": generateId('ADSK'),
        "admin": index % 2 === 0 ? "true" : "false",
        "status": row.status,
        "date": row.date,
        "author": row.author,
      };
    }),
    tableContentThree.data.map((row, index) => {
      return {
        "id": row.id,
        "adskid": generateId('ADSK'),
        "admin": index % 2 === 0 ? "true" : "false",
        "status": row.status,
        "date": row.date,
        "author": row.author,
      };
    }),
    [],
    tableContentTwo.data.map((row, index) => {
      return {
        "id": row.id,
        "adskid": generateId('ADSK'),
        "admin": index % 2 === 0 ? "true" : "false",
        "status": row.status,
        "date": row.date,
        "author": row.author,
      };
    })
  ],
};

