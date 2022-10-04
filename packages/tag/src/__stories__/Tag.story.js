import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Tag from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    children: {
      control: "text",
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

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Default Tag",
  onClose: null,
};

export const WithClose = Template.bind({});

WithClose.args = {
  children: "With Close Icon",
};
WithClose.storyName = "With close button";
