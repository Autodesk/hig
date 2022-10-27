import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Dropdown from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    variant: {
      control: "select",
      options: ["line", "box"],
    },
  },
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

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
};
