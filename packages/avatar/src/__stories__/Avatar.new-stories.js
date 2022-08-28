import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import Avatar from "../index";
import { sizes } from "../sizes";

import Readme from "../../README.md";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: [
        sizes.SMALL_16,
        sizes.MEDIUM_24,
        sizes.MEDIUM_32,
        sizes.LARGE_48,
        sizes.XLARGE_64,
      ],
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

const Template = (args) => <Avatar {...args} />;

export const Text = Template.bind({});

Text.args = {
  name: "Peter Parker",
  size: sizes.LARGE_48,
};

export const Image = Template.bind({});

Image.args = {
  image: avatarImagePath,
  name: "Bruce Wayne",
  size: sizes.LARGE_48,
};
