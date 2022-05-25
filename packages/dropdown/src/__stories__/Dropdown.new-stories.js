import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Dropdown from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
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

// eslint-disable-next-line no-unused-vars
const Template = (args, { globals: { colorScheme, density } }) => {
  // eslint-disable-next-line no-console
  console.log(density);
  return <Dropdown {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
};
