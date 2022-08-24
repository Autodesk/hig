import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import ProgressRing from "../index";
import Readme from "../../README.md";
import { availableSizes, availableSurfaces } from "../constants";

export default {
  title: "Components/ProgressRing",
  component: ProgressRing,
  argTypes: {
    surface: {
      options: availableSurfaces,
      control: "select",
    },
    size: {
      options: availableSizes,
      control: "select",
    },
    percentComplete: {
      control: {
        type: "number",
      },
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

const Template = (args) => <ProgressRing {...args} />;

export const Default = Template.bind({});

Default.storyName = "Indeterminate";

export const Determinate = Template.bind({});

Determinate.args = {
  percentComplete: 33,
};
