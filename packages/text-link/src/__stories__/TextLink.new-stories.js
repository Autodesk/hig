import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import TextLink from "../index";
import { availableTargets } from "../targets";
import Readme from "../../README.md";

export default {
  title: "Components/TextLink",
  component: TextLink,
  argTypes: {
    target: {
      options: availableTargets,
      control: "select",
    },
    children: {
      control: "text",
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

const Template = (args) => <TextLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a primary text link",
  link: "https://github.com/Autodesk/hig",
};
