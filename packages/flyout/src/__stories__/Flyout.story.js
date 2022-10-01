import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Button from "@hig/button";
import RichText from "@hig/rich-text";

import { css } from "emotion";
import Flyout from "../index";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";
import Readme from "../../README.md";

export default {
  title: "Components/Flyout",
  component: Flyout,
  argTypes: {
    anchorPoint: {
      options: AVAILABLE_ANCHOR_POINTS,
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

const Template = (args, context) => (
  <div
    className={css({
      alignItems: "center",
      display: "flex",
      height: "300px",
      justifyContent: "center",
    })}
  >
    <Flyout
      {...args}
      key={`${context.globals.colorScheme}-${context.globals.density}`}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  anchorPoint: anchorPoints.RIGHT_TOP,
  content: (
    <RichText>
      <h3>Important flyout information</h3>
      <p>Any content can go in here.</p>
    </RichText>
  ),
  children: <Button>Open Flyout</Button>,
};
