import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import Readme from "../../README.md";
import Menu, { MenuGroup, Option } from "../index";
import SAMPLE_OPTIONS from "./sampleOptions";

export default {
  title: "Components/Menu/MenuGroup",
  component: MenuGroup,
  subcomponents: { Menu, Option },
  argTypes: {
    children: {
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
  const { density } = context.globals;
  const shortcutWithTitle = [
    <Option id="shortcut-header" role="presentation">
      Shortcut Option Header
    </Option>,
    ...SAMPLE_OPTIONS.shortcutOptions,
  ];
  const avatarWithTitle = [
    <Option id="avatar-header" role="presentation">
      Avatar Option Header
    </Option>,
    ...SAMPLE_OPTIONS.getAvatarOptions(density),
  ];
  const iconWithTitle = [
    <Option id="icon-header" role="presentation">
      Icon Option Header
    </Option>,
    ...SAMPLE_OPTIONS.getIconOptions(density),
  ];

  return (
    <MenuGroup {...args}>
      <Menu divider key="a">
        {[...shortcutWithTitle]}
      </Menu>
      <Menu divider key="b">
        {[...avatarWithTitle]}
      </Menu>
      <Menu key="c">{[...iconWithTitle]}</Menu>
    </MenuGroup>
  );
};

export const Default = Template.bind({});
