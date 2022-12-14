# Table Group
To enable table grouping for `@hig/table` pass in your custom DataGroupComponent within your tableObject meta

Set your desired `group names` by passing in the appropriate array
```
meta: {
  ...
  dataGroupComponent: props => <DataGroupComponent passedData={props} />,
  },
  groupNames: ['Revit Model', 'CAD Formats', 'Sample Empty', 'Coordination Model'],
```

## Example of implementation of DataGroupComponent
```
import React from 'react';
import { css } from "emotion";

import Accordion from '@hig/accordion';
import Checkbox from '@hig/checkbox';

const DataGroupComponent = ({passedData}) => {
  const {
    styles,
    groupNames,
    data,
    dataGroup,
    count,
    getOffset = () => {},
    checkboxToggle = [],
    setCheckboxToggle = () => {},
    setAllMultiSelectedRows = () => {},
    setActiveMultiSelectRowArray = () => {},
    getActiveMultiSelectRowArray = () => {},
  } = passedData;

  const handleSelectAllGroup = (e) => {
    e.stopPropagation();

    let newArray = data.map(
      (row, index) => index + getOffset()
    );

    const groupSpecificDataArray = [...newArray];

    if (getActiveMultiSelectRowArray) {
      newArray = getActiveMultiSelectRowArray.concat(newArray);
    }
    if (checkboxToggle[count] === false) {
      setAllMultiSelectedRows(true);
      setCheckboxToggle(count, true);
      setActiveMultiSelectRowArray(newArray);
    } else {
      setAllMultiSelectedRows(false);
      setCheckboxToggle(count, false);
      newArray = newArray.filter( (el) => !groupSpecificDataArray.includes( el ) );
      setActiveMultiSelectRowArray(newArray);
    }
  }
  return (
    <>
      <Accordion
        label={
          <div className={css(styles.higGroupedLabel)}>
            <div className={css(styles.higGroupToggleHolder)}>
              <Checkbox id={count} onClick={handleSelectAllGroup} checked={checkboxToggle[count]} className={css(styles.higGroupedCheckToggle)}/>
            </div>
            <div>{groupNames ? groupNames[count] : ""}</div>
            <div className={css(styles.higGroupedDataCount)}>
              {`(${data.length})`}
            </div>
          </div>
        }
        defaultCollapsed={false}
        stylesheet={(styles, props, themeData) => {
          return {
            ...styles,
            indicator: {
              ...styles.indicator,
              marginLeft: '30px'
            }
            
          }
        }}
      >
      {dataGroup}
      </Accordion>
    </>
  )
}

export default DataGroupComponent;
```

## Example method to implement checkbox for select all within your component
```
const [checkboxToggle, setCheckboxToggle] = useState(Array(tableObject.data.length).fill(false));

const handleCheckboxToggle = (count, value) => {
  const copyCheckboxArray = checkboxToggle.map((item, index) => {
    if (index === count) {
      item = value;
    }
    return item;
  });

  setCheckboxToggle(copyCheckboxArray);
}
```
