import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { css } from "emotion";

import Spacer from "../index";
import Readme from "../../README.md";
import { AVAILABLE_SIZES } from "../availableSizes";

export default {
  title: "Basics/Spacer",
  component: Spacer,
  argTypes: {
    spacing: {
      options: AVAILABLE_SIZES,
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
  const styles = {
    width: "100px",
    height: "100px",
    background: "blue",
  };
  return (
    <>
      <div className={css(styles)} />
      <Spacer {...args} />
      <div className={css(styles)} />
    </>
  );
};

export const Default = Template.bind({});

Default.storyName = "Spacing prop";

export const SizeProp = Template.bind({});

SizeProp.storyName = "Size prop";
SizeProp.args = {
  size: "53px",
};
