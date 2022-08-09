import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Banner from "../index";
import Readme from "../../README.md";
// import { targets, types, widths } from "../constants";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    // target: {
    //   options: [targets.SELF, targets.BLANK, targets.PARENT, targets.TOP],
    //   control: { type: "select" },
    // },
    // type: {
    //   options: [types.SOLID, types.OUTLINE, types.FLAT],
    //   control: { type: "select" },
    // },
    // width: {
    //   options: [widths.GROW, widths.SHRINK],
    //   control: { type: "select" },
    // },
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

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  // children: 'Test',
  // title: "Button",
  // type: types.SOLID,
  // width: widths.SHRINK,
};
