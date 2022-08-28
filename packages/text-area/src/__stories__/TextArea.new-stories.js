import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { availableVariants } from "@hig/input";

import TextArea from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/TextArea",
  component: TextArea,
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

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
