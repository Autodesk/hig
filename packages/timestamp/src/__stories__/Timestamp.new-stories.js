import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Timestamp from "../index";
import Readme from "../../README.md";
import { availableSequences } from "../constants";

export default {
  title: "Components/Timestamp",
  component: Timestamp,
  argTypes: {
    timestampSequence: {
      options: availableSequences,
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

const Template = (args) => {
  const now = new Date();
  const hourAgo = new Date(now);

  hourAgo.setHours(hourAgo.getHours() - 1);

  return (
    <Timestamp {...args} timestamp={args?.timestamp || hourAgo.toISOString()} />
  );
};

export const Default = Template.bind({});
