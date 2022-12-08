import { generateId } from "@hig/utils"
import SearchInput from "./SearchInput";
import PaginationInput from "./PaginationInput";
import PaginationDynamic from "./PaginationDynamic";
import ExpandedComponent from "./ExpandedComponent";
import ColumnShowHideComponent from "./ColumnShowHideComponent";
import SortColumns from "./SortColumns";
import GenericApplication from "./GenericApplication";
import DataGroupComponent from "./DataGroupComponent";
import {tableContent, tableContentTwo, tableContentThree, tableContentFour} from "./DataSourceMock";

/*
meta: {
  - contains custom components from user that will allow
  - for enhanced table functionality such as search, filtering, etc.
  - omit to disable functionality in table

  globalFilter: allows for global search implementation
  columnFilter: allows for column specific search/filtering
  paginationComponent: allows for pagination implementation
}

columns: {
  - column headers
  - can take custom cell data / components
}

data: {
  - array of data objects that populate table
}
*/

const groupNames = ['Revit Model', 'CAD Formats', 'Coord Model'];

export const TABLE_OBJECT_BASIC = {
  meta: {
    // globalFilter: props => <SearchInput passedData={props} />,
    paginationComponent: props => <PaginationInput passedData={props} />,
    paginationDynamic: props => <PaginationDynamic passedData={props} />,
    stickyItems: {
      isStickyHeader: true,
      isStickyColumns: true,
    },
    expandedComponent: props => <ExpandedComponent passedData={props} />,
    // columnShowHideComponent: props => <ColumnShowHideComponent passedData={props} />,
    columnShowHide: true,
    sortColumns: props => <SortColumns passedData={props} />,
    genericApplication: props => <GenericApplication passedData={props} />,
    dataGroupComponent: props => <DataGroupComponent passedData={props} />,
    formatDate: false,
  },
  columns: [
      {
        id: "Autodesk ID",
        Header: "Autodesk ID",
        accessor: "adskid",
        disableFilters: true,
        width: 180
      },
      {
        id: "Administrator",
        Header: "Administrator",
        accessor: "admin",
        disableFilters: true,
        width: 180
      },
      {
        id: "Status",
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        width: 180
      },
      {
        id: "Date",
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        width: 180
      },
      {
        id: "Author",
        Header: "Author",
        accessor: "author",
        disableFilters: true,
        width: 180
      },
  ],
  hiddenColumns: "true",
  // defaultSelectedRows: [0, 4],
  // groupNames: ['Revit Model', 'CAD Formats', 'Coordination Model'],
  // data: [
  //   tableContentThree.data.map((row, index) => {
  //     return {
  //       "id": row.id,
  //       "adskid": generateId('ADSK'),
  //       "admin": index % 2 === 0 ? "true" : "false",
  //       "status": row.status,
  //       "date": row.date,
  //       "author": row.author,
  //     };
  //   }),
  //   tableContentTwo.data.map((row, index) => {
  //     return {
  //       "id": row.id,
  //       "adskid": generateId('ADSK'),
  //       "admin": index % 2 === 0 ? "true" : "false",
  //       "status": row.status,
  //       "date": row.date,
  //       "author": row.author,
  //     };
  //   }),
  //   [],
  //   tableContent.data.map((row, index) => {
  //     return {
  //       "id": row.id,
  //       "adskid": generateId('ADSK'),
  //       "admin": index % 2 === 0 ? "true" : "false",
  //       "status": row.status,
  //       "date": row.date,
  //       "author": row.author,
  //     };
  //   })
  // ],
  // data: tableContent.data.map((row, index) => {
  //   return {
  //     "id": row.id,
  //     "adskid": generateId('ADSK'),
  //     "admin": index % 2 === 0 ? "true" : "false",
  //     "status": row.status,
  //     "date": row.date,
  //     "author": row.author,
  //   };
  // })
  data: tableContentFour.data.map((row, index) => {
    return {
        "id": row.id,
        "adskid": <div>{groupNames[index]}&nbsp;({row.subRows.length})</div>,
        "admin": "",
        "status": row.status,
        "date": row.date,
        "author": row.author,
        "subRows": row.subRows,
        "parent": row.parent,
      };
  }),
};
