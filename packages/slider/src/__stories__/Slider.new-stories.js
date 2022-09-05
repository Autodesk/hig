import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Slider from "../index";
import { AVAILABLE_SLIDER_TYPES } from "../constants";
import Readme from "../../README.md";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    variant: {
      options: AVAILABLE_SLIDER_TYPES,
      control: "select",
    },
    defaultValue: { control: "number" },
    max: { control: "number" },
    min: { control: "number" },
    step: { control: "number" },
    value: { control: "number" },
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

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
