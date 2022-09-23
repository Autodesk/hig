import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Input, { variants } from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: [variants.LINE, variants.BOX],
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
