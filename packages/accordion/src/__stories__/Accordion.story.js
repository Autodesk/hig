import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Typography from "@hig/typography";

import Accordion from "../index";
import Readme from "../../README.md";
import { indicators, indicatorPositions } from "../constants";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    indicator: {
      options: [indicators.CARET, indicators.OPERATOR],
      control: { type: "select" },
    },
    indicatorPosition: {
      options: [indicatorPositions.LEFT, indicatorPositions.RIGHT],
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

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Typography>Accordion content</Typography>,
  label: "Accordion Label",
};
