import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { css } from "emotion";
import Label from "@hig/label";
import Spacer from "@hig/spacer";

import RadioButton from "../index";
import Readme from "../../README.md";
// import { targets, types, widths } from "../constants";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  // argTypes: {
  //   target: {
  //     options: [targets.SELF, targets.BLANK, targets.PARENT, targets.TOP],
  //     control: { type: "select" },
  //   },
  //   type: {
  //     options: [types.SOLID, types.OUTLINE, types.FLAT],
  //     control: { type: "select" },
  //   },
  //   width: {
  //     options: [widths.GROW, widths.SHRINK],
  //     control: { type: "select" },
  //   },
  // },
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
        <Label htmlFor="radio-button-1">Radio Button 1</Label>
      </div>
      <div className={css(outerStyle)}>
        <RadioButton {...args} name="radio-buttons" id="radio-button-2" />
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-2">Radio Button 2</Label>
      </div>
      <div className={css(outerStyle)}>
        <RadioButton {...args} name="radio-buttons" id="radio-button-3" />
        <Spacer spacing="s" />
        <Label htmlFor="radio-button-3">Radio Button 3</Label>
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
