import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { css } from "emotion";
import Input from "@hig/input";

import Label from "../index";
import Readme from "../../README.md";
import { availableVariants } from "../constants";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    variant: {
      options: availableVariants,
      control: "select",
    },
    htmlFor: {
      control: "text",
      description: "HTML for attribute",
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

const Template = (args) => (
  <div
    className={css({
      alignItems: "center",
      display: args.variant === "top" ? "block" : "flex",
    })}
  >
    <Label {...args} />
    <div
      className={css({
        marginLeft: args.variant === "top" ? 0 : "10px",
        width: args.variant === "top" ? "100%" : "300px",
      })}
    >
      <Input disabled={args.disabled} id={args.htmlFor} variant="box" />
    </div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: "Label",
  htmlFor: "storybook-input",
  variant: "top",
};
