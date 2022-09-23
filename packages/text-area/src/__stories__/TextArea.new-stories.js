import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import TextArea from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/TextArea",
  component: TextArea,
  argTypes: {
    variant: {
      control: false,
      table: { disable: true },
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

const Template = (args) => <TextArea {...args} variant="box" />;

export const Default = Template.bind({});
