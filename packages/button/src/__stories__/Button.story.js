import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { Settings16, Settings24 } from "@weave-design/icons";

import Button from "../index";
import Readme from "../../README.md";
import { targets, types, widths } from "../constants";
import iconOnlyStylesheet from "../utils/iconOnlyStylesheet";

const buttonWithIconOnlyCode = `
import Button, {iconOnlyStylesheet} from "@weave-design/button";
import { Settings24 } from "@weave-design/icons";

<Button icon={<Settings24 />} stylesheet={iconOnlyStylesheet} />
`;

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
          <Stories />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args, context) => {
  const Icon =
    context.globals.density === "Medium density" ? Settings24 : Settings16;
  const iconProp =
    context.story === "Button with label and icon" ||
    context.story === "Button with icon only"
      ? { icon: <Icon /> }
      : {};
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

ButtonWithIcon.storyName = "Button with label and icon";
ButtonWithIcon.args = {
  ...Default.args,
  children: "Settings",
};

export const ButtonWithIconOnly = Template.bind({});

ButtonWithIconOnly.storyName = "Button with icon only";
ButtonWithIconOnly.args = {
  ...Default.args,
  children: "",
  stylesheet: iconOnlyStylesheet,
};
ButtonWithIconOnly.parameters = {
  docs: {
    source: {
      code: buttonWithIconOnlyCode,
    },
  },
};
