import React from "react";
import { ArgsTable, Primary,  } from "@storybook/addon-docs";

import Button from "../index";
import Readme from "../../README.md";
import { targets, types, widths } from "../constants";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    target: {
      options: [targets.SELF, targets.BLANK, targets.PARENT, targets.TOP],
      control: { type: "select" },
    },
    type: {
      options: [types.SOLID, types.OUTLINE, types.FLAT],
      control: { type: "select" },
    },
    width: {
      options: [widths.GROW, widths.SHRINK],
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

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Button",
  type: types.SOLID,
  width: widths.SHRINK,
};
