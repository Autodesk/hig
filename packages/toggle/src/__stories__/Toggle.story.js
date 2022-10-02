import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Toggle from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Toggle",
  component: Toggle,
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

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
