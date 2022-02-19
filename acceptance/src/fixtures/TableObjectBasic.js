import { generateId } from "@hig/utils"
import SearchInput from "./SearchInput";
import PaginationInput from "./PaginationInput";
import PaginationDynamic from "./PaginationDynamic";
import ExpandedComponent from "./ExpandedComponent";
import ColumnShowHideComponent from "./ColumnShowHideComponent";
import SortColumns from "./SortColumns";
import {tableContent} from "./DataSourceMock";

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

export const TABLE_OBJECT_BASIC = {
  meta: {
    globalFilter: props => <SearchInput passedData={props} />,
    paginationComponent: props => <PaginationInput passedData={props} />,
    paginationDynamic: props => <PaginationDynamic passedData={props} />,
    stickyItems: {
      isStickyHeader: true,
      isStickyColumns: true,
    },
    expandedComponent: props => <ExpandedComponent passedData={props} />,
    columnShowHideComponent: props => <ColumnShowHideComponent passedData={props} />,
    columnShowHide: true,
    sortColumns: props => <SortColumns passedData={props} />, 
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
  data: tableContent.data.map((row, index) => {
    return {
      "id": row.id,
      "adskid": generateId('ADSK'),
      "admin": index % 2 === 0 ? "true" : "false",
      "status": row.status,
      "date": row.date,
      "author": row.author,
    };
  }),
};
