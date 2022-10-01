## Group Sorting
Handle group sorting logic by passing in your custom sort method into the `onSortClick` prop
```
<Table
  ...
  onSortClick={handleCustomSort}
/>
```

## tableObject setup for Group Sorting 
To enable sorting, within your tableObject meta ensure that you are passing in a method to the `sortColumns`

```
import SortColumns from "./SortColumns";

export const TABLE_OBJECT_GROUP_SORT = {
  meta: {
    ...
    sortColumns: props => <SortColumns passedData={props} />,
  },
```

## Sample SortColumns Component for custom Icon
```
import React from 'react';
import { css, cx } from "emotion";
import {CaretUp16, CaretUp24, CaretDown16, CaretDown24} from '@hig/icons';

const styles = {
    position: "relative",
    top: "5px",
    left: "20px",
    opacity: 0,
    "&:hover": {
        opacity: 0.5
    }
};

const SortColumns = (props) => {
    const renderSortIcon = (e) => {
        if (props.passedData.density === 'medium-density') {
            return props.passedData.isSortedDesc ? <CaretDown24 /> :  <CaretUp24 />
        }
        return props.passedData.isSortedDesc ? <CaretDown16 /> :  <CaretUp16 />
    }

    return (
        <span className={cx([props.passedData.className, css(styles)])}>{renderSortIcon()}</span>
    )
}

export default SortColumns;

```

## Example handleCustomSort Method
```
...
const [isDescending, setIsDescending] = useState(true);

const handleCustomSort = () => {
  setIsDescending(!isDescending)
  const categoryToSort = tableObject.columns[headerIndex].accessor;
  const sortedArray = tableObject.data.map(column => {
    const copyColumn = [...column]

    let seeColumn = copyColumn.sort((a, b) => (a[categoryToSort] < b[categoryToSort]) ? 1 : -1);
    if (isDescending) {
      seeColumn = copyColumn.sort((a, b) => (a[categoryToSort] > b[categoryToSort]) ? 1 : -1);
    }
    return seeColumn;
  })
  
  tableObject.data = sortedArray;
}
```
