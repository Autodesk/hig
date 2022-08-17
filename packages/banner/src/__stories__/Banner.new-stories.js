import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Banner from "../index";
import Readme from "../../README.md";
import { AVAILABLE_TYPES } from "../types";
import { AVAILABLE_PLACEMENTS } from "../placements";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    type: {
      options: AVAILABLE_TYPES,
      control: { type: "select" },
    },
    placement: {
      options: AVAILABLE_PLACEMENTS,
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

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
