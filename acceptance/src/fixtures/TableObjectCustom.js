import Checkbox from "@hig/checkbox";
// imports for your custom npm modules that contain
// user custom components
// examples shown are of fixture components within table app
import SampleComponent from "./SampleComponent";
import SearchInput from "./SearchInput";
import ColumnSearchInput from "./ColumnSearchInput";
import PaginationInput from "./PaginationInput";
import PaginationDynamic from "./PaginationDynamic";
import ExpandedComponent from "./ExpandedComponent";
import InlineEditor from "./InlineEditor";
import ColumnShowHideComponent from "./ColumnShowHideComponent";
import SortColumns from "./SortColumns";
import {tableContent} from "./DataSourceMock";

const ChangeText = (props) => {

};
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

export const TABLE_OBJECT_CUSTOM = {
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
    formatDate: true,
  },
  columns: [
      {
        Header: "Name",
        accessor: "id",
        Cell: props => <SampleComponent passedData={props} />,
        disableFilters: true,
        width: 500
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        width: 180
      },
      {
        Header: "Version",
        accessor: "version",
        Cell: props => <InlineEditor>{props.value}</InlineEditor>,
        disableFilters: true,
        width: 125
      },
      {
        Header: "Active",
        accessor: "active",
        Cell: props => <div style={{padding: "5px 5px 5px 15px"}}><div style={{display: "flex"}}><Checkbox defaultChecked={props.value} /></div></div>,
        disableFilters: true,
        width: 75
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
  data: tableContent.data,
};
