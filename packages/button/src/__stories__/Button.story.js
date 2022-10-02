import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import { Settings16, Settings24 } from "@hig/icons";

import Button from "../index";
import Readme from "../../README.md";
import { targets, types, widths } from "../constants";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    target: {
      options: [targets.SELF, targets.BLANK, targets.PARENT, targets.TOP],
      control: { type: "select" },
    },
    title: {
      control: false,
      type: {
        name: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      control: "text",
    },
    type: {
      options: [types.SOLID, types.OUTLINE, types.FLAT],
      control: "select",
    },
    width: {
      options: [widths.GROW, widths.SHRINK],
      control: "select",
    },
    icon: {
      control: false,
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

const Template = (args, context) => {
  const Icon = context.globals.density === "Medium" ? Settings24 : Settings16;
  const iconProp =
    context.story === "Button with icon" ? { icon: <Icon /> } : {};
  return <Button {...args} {...iconProp} />;
};

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  type: types.SOLID,
  width: widths.SHRINK,
};

export const ButtonLink = Template.bind({});

ButtonLink.storyName = "Button as a link";
ButtonLink.args = {
  children: "Button as a Link",
  link: "https://www.autodesk.com",
  target: "_blank",
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.storyName = "Button with icon";
ButtonWithIcon.args = {
  ...Default.args,
  children: "Settings",
};
