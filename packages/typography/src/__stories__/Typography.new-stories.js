import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

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
