import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Button from "@hig/button";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";

import { css } from "emotion";
import Tooltip, { Text } from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  subcomponents: { Text },
  argTypes: {
    anchorPoint: {
      options: AVAILABLE_ANCHOR_POINTS,
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

const Template = (args, context) => (
  <div
    className={css({
      alignItems: "center",
      display: "flex",
      height: "300px",
      justifyContent: "center",
    })}
  >
    <Tooltip
      {...args}
      content={<Text>{args.content}</Text>}
      key={`${context.globals.colorScheme}-${context.globals.density}`}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  anchorPoint: anchorPoints.BOTTOM_CENTER,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque.",
  children: <Button>Open Tooltip</Button>,
};
