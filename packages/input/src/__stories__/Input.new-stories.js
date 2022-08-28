import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Input from "../index";
import Readme from "../../README.md";
import { availableVariants } from "../constants";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: availableVariants,
      control: { type: "select" },
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

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
