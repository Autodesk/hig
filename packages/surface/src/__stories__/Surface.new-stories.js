import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Typography from "@hig/typography";

import Surface from "../index";
import Readme from "../../README.md";
import {
  AVAILABLE_BORDER_RADII,
  AVAILABLE_LEVELS,
  AVAILABLE_SHADOWS,
  AVAILABLE_SPACINGS,
} from "../constants";

export default {
  title: "Basics/Surface",
  component: Surface,
  argTypes: {
    children: {
      control: false,
    },
    horizontalPadding: {
      control: "select",
      options: AVAILABLE_SPACINGS,
    },
    verticalPadding: {
      control: "select",
      options: AVAILABLE_SPACINGS,
    },
    shadow: {
      control: "select",
      options: AVAILABLE_SHADOWS,
    },
    level: {
      control: "select",
      options: AVAILABLE_LEVELS,
    },
    borderRadius: {
      control: "select",
      options: AVAILABLE_BORDER_RADII,
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

const Template = (args) => <Surface {...args} />;

export const Default = Template.bind({});

Default.args = {
  borderRadius: "m",
  children: <Typography>Happy little clouds</Typography>,
  horizontalPadding: "m",
  shadow: "low",
  verticalPadding: "m",
};
