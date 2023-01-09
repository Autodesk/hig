import React from "react";
import { tableGroup } from "./DataSourceMock";
import SortColumns from "./SortColumns";

const groupNames = ["Revit Model", "CAD Formats", "Coord Model"];

const GROUP_TABLE_OBJECT = {
  meta: {
    stickyItems: {
      isStickyHeader: true,
      isStickyColumns: true,
    },
    sortColumns: (props) => <SortColumns passedData={props} />,
  },
  columns: [
    {
      id: "Autodesk ID",
      Header: "Autodesk ID",
      accessor: "adskid",
      disableFilters: true,
      width: 180,
    },
    {
      id: "Administrator",
      Header: "Administrator",
      accessor: "admin",
      disableFilters: true,
      width: 180,
    },
    {
      id: "Status",
      Header: "Status",
      accessor: "status",
      disableFilters: true,
      width: 180,
    },
    {
      id: "Date",
      Header: "Date",
      accessor: "date",
      disableFilters: true,
      width: 180,
    },
    {
      id: "Author",
      Header: "Author",
      accessor: "author",
      disableFilters: true,
      width: 180,
    },
  ],
  data: tableGroup.data.map((row, index) => ({
    id: row.id,
    adskid: (
      <div>
        {groupNames[index]}&nbsp;
        {row.subRows?.length ? `(${row.subRows?.length})` : ""}
      </div>
    ),
    admin: "",
    status: row.status,
    date: row.date,
    author: row.author,
    subRows: row.subRows,
    parent: row.parent,
  })),
};

export default GROUP_TABLE_OBJECT;
