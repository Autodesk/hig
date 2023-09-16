import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Divider from "../index";
import Readme from "../../README.md";
import { AVAILABLE_ORIENTATIONS, AVAILABLE_VARIANTS } from "../constants";

export default {
  title: "Basics/Divider",
  component: Divider,
  argTypes: {
    orientation: {
      control: "select",
      options: AVAILABLE_ORIENTATIONS,
    },
    variant: {
      control: "select",
      options: AVAILABLE_VARIANTS,
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

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = {
  length: "100px",
  orientation: "horizontal",
  variant: "lightweight",
};
