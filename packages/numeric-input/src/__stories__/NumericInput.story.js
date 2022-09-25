import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { variants } from "@hig/input";

import NumericInput from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Numeric input",
  component: NumericInput,
  argTypes: {
    variant: {
      options: [variants.LINE, variants.BOX],
      control: { type: "select" },
    },
    step: {
      control: "number",
      description: "HTML step attribute",
      type: {
        name: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    min: {
      control: "number",
      description: "HTML min attribute",
      type: {
        name: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    max: {
      control: "number",
      description: "HTML max attribute",
      type: {
        name: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
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

const Template = (args) => <NumericInput {...args} />;

export const Default = Template.bind({});
