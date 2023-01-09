# Table Group With Tree Grid

## Example of group object with Tree Grid
For Tree Grid implementation, nest additional `subRows` within the parent subRows array. 

```
data: [
        {
            id: 1,
            name: "",
            status: "",
            version: "",
            active: "",
            date: "",
            author: "",
            subRows: [ 
            {
                "id": 1,
                "adskid": "F3.23-1-48X36.rvt",  (TREE GRID TITLE HERE)
                "admin": "--", (Note the use of -- here to label the columns instead of blank)
                "status": "--",
                "date": "--",
                "author": "--",
                subRows: [ (NEST subRows array to implement tree grid structure)
                    {
                        "id": 1,
                        "adskid": <TreeGridContent value={generateId('ADSK')} last={false} />,
                        "admin": "false",
                        "status": "edit",
                        "date": "2019-03-07T14:48:00Z",
                        "author": "SET TWO AUTHOR 1",
                        "parent": 1,
                    },
                    {
                        "id": 2,
                        "adskid": <TreeGridContent value={generateId('ADSK')} last={true} />,
                        "admin": "true",
                        "status": "edit",
                        "date": "2019-03-07T14:48:00Z",
                        "author": "SET TWO AUTHOR 2",
                        "parent": 1,
                    }
                ],
                "parent": 2,
            },
            {
                "id": 2,
                "adskid": generateId('ADSK'),
                "admin": "true",
                "status": "review",
                "date": "2021-10-06T14:48:00Z",
                "author": "SET ONE AUTHOR 1",
                "parent": 2,
            }
            ],
            parent: null, (null to denote group header title styling)
        },
    ]
```
