import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { css } from "emotion";
import Label from "@hig/label";
import Spacer from "@hig/spacer";

import RadioButton from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "HTML disabled attribute",
      type: {
        name: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    name: {
      control: false,
      description: "HTML name attribute",
      type: {
        name: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    id: {
      control: false,
      description: "HTML id attribute",
      type: {
        name: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
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
  const outerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5px",
  };

  return (
    <form>
      <div className={css(outerStyle)}>
        <RadioButton {...args} name="radio-buttons" id="radio-button-1" />
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-1" disabled={args.disabled}>
          Radio Button 1
        </Label>
      </div>
      <div className={css(outerStyle)}>
        <RadioButton {...args} name="radio-buttons" id="radio-button-2" />
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-2" disabled={args.disabled}>
          Radio Button 2
        </Label>
      </div>
      <div className={css(outerStyle)}>
        <RadioButton {...args} name="radio-buttons" id="radio-button-3" />
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-3" disabled={args.disabled}>
          Radio Button 3
        </Label>
      </div>
    </form>
  );
};

export const Default = Template.bind({});

Default.args = {
  // title: "Button",
  // type: types.SOLID,
  // width: widths.SHRINK,
};
