# Table Group
`@hig/table` utilizes `subRows` to organize the table elements into groups.

To set your group title set the first column element within your object to the group name

Example below shows how to set a group name title along with accurate count  GROUP TITLE (COUNT)

```
const groupNames = ['Revit Model', 'CAD Formats', 'Coord Model'];

data: tableContentFour.data.map((row, index) => {
    return {
        "id": row.id,
        "FIRST_COLUMN": <div>{groupNames[index]}&nbsp;{row.subRows?.length ? `(${row.subRows?.length})` : ''}</div>,
        ...
      };
  }),

```

## Example of group object
Note that the parent column data is denoted with `""` to keep the row with only title and count.
You can also use `-` or whatever symbol you want if you prefer to have that for each column group header.

Set `parent: null` to denote group header title styling, `parent: #` for group children
```
data: [
        {
            id: 1,
            name: "",  (note using "" for group column header to keep this space blank)
            status: "",
            version: "",
            active: "",
            date: "",
            author: "",
            subRows: [
            {
                "id": 1,
                "adskid": generateId('ADSK'),
                "admin": "false",
                "status": "edit",
                "date": "2021-10-06T14:48:00Z",
                "author": "SET FOUR AUTHOR 1",
                "parent": 1,
            },
            {
                "id": 2,
                "adskid": generateId('ADSK'),
                "admin": "true",
                "status": "review",
                "date": "2021-10-06T14:48:00Z",
                "author": "SET FOUR AUTHOR 2",
                "parent": 1,
            },
            {
                "id": 3,
                "adskid": generateId('ADSK'),
                "admin": "false",
                "status": "edit",
                "date": "2021-10-06T14:48:00Z",
                "author": "SET FOUR AUTHOR 3",
                "parent": 1,
            },
            {
                "id": 4,
                "adskid": generateId('ADSK'),
                "admin": "false",
                "status": "edit",
                "date": "2021-10-06T14:48:00Z",
                "author": "SET FOUR AUTHOR 4",
                "parent": 1,
            }
            ],
            parent: null,  (note setting parent to null to get group title styling)
        },
        ...
    ]
```
