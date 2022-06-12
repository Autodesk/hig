import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Button from "@hig/button";
import RichText from "@hig/rich-text";

import Flyout from "../index";
import { anchorPoints } from "../anchorPoints";
import Readme from "../../README.md";
// import { indicators, indicatorPositions } from "../constants";

export default {
  title: "Components/Flyout",
  component: Flyout,
  argTypes: {
    anchorPoint: {
      options: [
        anchorPoints.TOP_LEFT,
        anchorPoints.TOP_CENTER,
        anchorPoints.TOP_RIGHT,
        anchorPoints.RIGHT_TOP,
        anchorPoints.RIGHT_CENTER,
        anchorPoints.RIGHT_BOTTOM,
        anchorPoints.BOTTOM_LEFT,
        anchorPoints.BOTTOM_CENTER,
        anchorPoints.BOTTOM_RIGHT,
        anchorPoints.LEFT_TOP,
        anchorPoints.LEFT_CENTER,
        anchorPoints.LEFT_BOTTOM,
      ],
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

const Template = (args) => <Flyout {...args} />;

export const Default = Template.bind({});

Default.args = {
  anchorPoint: anchorPoints.RIGHT_TOP,
  content: (
    <RichText>
      <h3>Important flyout information</h3>
      <p>Any content can go in here.</p>
    </RichText>
  ),
  children: <Button title="Open flyout" />,
};
