import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Table from "../index";
import SAMPLE_TABLE_OBJECT from "../__fixtures__/sampleTableObject";
import Readme from "../../README.md";

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
