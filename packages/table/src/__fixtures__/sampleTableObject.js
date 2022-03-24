const SAMPLE_TABLE_OBJECT = {
  meta: {
    stickyItems: {
      isStickyHeader: true,
      isStickyColumns: true
    }
  },
  columns: [
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
    }
  ],
  data: [
    {
      id: 1,
      status: "locked",
      date: "2020-01-05T14:48:00Z",
      author: "Sample Author 1 Sample Author 1"
    },
    {
      id: 2,
      status: "edit",
      date: "2021-10-06T14:48:00Z",
      author: "Sample Author 2"
    },
    {
      id: 3,
      status: "review",
      date: "2019-03-07T14:48:00Z",
      author: "Sample Author 3"
    },
    {
      id: 4,
      status: "submitted",
      date: "2021-05-08T14:48:00Z",
      author: "Sample Author 4"
    },
    {
      id: 5,
      status: "edit",
      date: "2021-09-11T14:48:00Z",
      author: "Sample Author 5"
    }
  ]
};

export default SAMPLE_TABLE_OBJECT;
