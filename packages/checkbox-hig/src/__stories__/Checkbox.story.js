import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Checkbox from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
