import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import Button from "@hig/button";
import Menu, { Option } from "@hig/menu";

import { css } from "emotion";
import Flyout from "../index";
import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "../anchorPoints";
import Readme from "../../README.md";

const customFlyoutStyles = (styles) => ({
  ...styles,
  panel: {
    ...styles.panel,
    padding: 0,
  },
});

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
      stylesheet={customFlyoutStyles}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  anchorPoint: anchorPoints.TOP_CENTER,
  content: (
    <Menu>
      <Option id="option-1">Account Details</Option>
      <Option id="option-2">Sign Out</Option>
    </Menu>
  ),
  children: <Button>Open Flyout</Button>,
};
