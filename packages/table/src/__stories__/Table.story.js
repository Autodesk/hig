import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import Table from "../index";
import SAMPLE_TABLE_OBJECT from "../__fixtures__/sampleTableObject";
import GROUP_TABLE_OBJECT from "../__fixtures__/groupTableObject";
import GROUP_TREE_GRID_OBJECT from "../__fixtures__/groupTreeGridTableObject";

import Readme from "../../README.md";
import ReadmeGroup from "../__fixtures__/README_GROUP.md";
import ReadmeGroupTreeGrid from "../__fixtures__/README_GROUP_TREE_GRID.md";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Readme />
          <ArgsTable />
          <Stories />
          <ReadmeGroup />
          <ReadmeGroupTreeGrid />
        </>
      ),
    },
  },
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  tableObject: SAMPLE_TABLE_OBJECT,
};

export const Group = Template.bind({});

Group.args = {
  tableObject: GROUP_TABLE_OBJECT,
  rowSelection: true,
};

export const GroupTreeGrid = Template.bind({});

GroupTreeGrid.args = {
  tableObject: GROUP_TREE_GRID_OBJECT,
  rowSelection: true,
};
