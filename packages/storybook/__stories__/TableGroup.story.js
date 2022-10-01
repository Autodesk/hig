import React, { useState } from "react";
import { Primary, Stories } from "@storybook/addon-docs";
import Table from '@hig/table';

import ReadmeGroup from './fixtures/TableGroup/README_GROUP.md'
import ReadmeGroupSort from './fixtures/TableGroup/README_GROUP_SORT.md'
import { TABLE_OBJECT_GROUP, TABLE_OBJECT_GROUP_SORT } from "./fixtures/TableGroup/TableObjectCustom";

const TableGroup = (props) => {
  const {tableObject, onSortClick, rowSelection} = props;
  const [isDescending, setIsDescending] = useState(true);

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

  const handleOnSortClick = (e, props, headerIndex) => {  
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
  };

  return (
    <Table
      tableObject={tableObject}
      rowSelection={rowSelection}
      onSortClick={onSortClick ? handleOnSortClick : () => {}}
      tableGroupSelectAll={{checkboxToggle, setCheckboxToggle: handleCheckboxToggle}}
      stylesheet={(styles, props, themeData) => {
        return {
          ...styles,
          higTableHeaderWrapper: {
            ...styles.higTableHeaderWrapper,
            borderBottom: '1px solid #fff'
          },
          higTableCell: {
            ...styles.higTableCell,
            borderTopColor: 'none',
            borderBottomColor: 'none'
          },
          higGroupToggleHolder: {
            ...styles.higGroupToggleHolder,
            position: 'absolute',
            left: '0',
            padding: '0',
          }
        }
      }}
    />
  )
}

export default {
  title: "Dev lab/Table group",
  component: TableGroup,
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <ReadmeGroup />
          <Stories />
          <ReadmeGroupSort />
        </>
      ),
    },
  }
}

const Template = (args) => <TableGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  tableObject: TABLE_OBJECT_GROUP,
  rowSelection: true,
  tableGroupSelectAll: {checkboxToggle: false, setCheckboxToggle: () => {}}
};

export const GroupSort = Template.bind({});

GroupSort.storyName = "Group sort";
GroupSort.args = {
  tableObject: TABLE_OBJECT_GROUP_SORT,
  rowSelection: true,
  tableGroupSelectAll: {checkboxToggle: false, setCheckboxToggle: () => {}},
  onSortClick: () => {},
}
