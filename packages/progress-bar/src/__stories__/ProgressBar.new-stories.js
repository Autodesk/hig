import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import ProgressBar from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    percentComplete: {
      control: "number",
      if: { arg: "percentComplete" },
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

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.storyName = "Indeterminate";

export const Determinate = Template.bind({});

Determinate.args = {
  percentComplete: 33,
};
