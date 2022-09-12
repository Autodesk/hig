import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import Typography from "../index";
import Readme from "../../README.md";
import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS,
} from "../_constants";

export default {
  title: "Basics/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: AVAILABLE_VARIANTS,
      control: "select",
    },
    align: {
      options: AVAILABLE_ALIGNMENTS,
      control: "select",
    },
    fontWeight: {
      options: AVAILABLE_FONT_WEIGHTS,
      control: "select",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Stories />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Typography component",
};

export const ElementTypeProp = Template.bind({});

ElementTypeProp.storyName = "With elementType prop";
ElementTypeProp.args = {
  children: "111 McInnis Parkway, San Rafael, CA 94903, USA",
  variant: "body",
  fontWeight: "normal",
  align: "left",
  elementType: "address",
};
