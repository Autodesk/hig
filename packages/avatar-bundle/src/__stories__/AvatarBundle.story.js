import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { sizes } from "@weave-design/avatar/src/sizes";

import AvatarBundle from "../index";
import { SAMPLE_AVATARS } from "../__fixtures__/SAMPLE_AVATARS";
import { spacings } from "../spacings";

import Readme from "../../README.md";

const getAvatars = (amountOfAvatars) => {
  const avatars = [];

  for (let i = 0; i < amountOfAvatars; i += 1) {
    avatars.push(SAMPLE_AVATARS[i]);
  }

  return avatars;
};

export default {
  title: "Components/Avatar bundle",
  component: AvatarBundle,
  argTypes: {
    size: {
      options: [
        sizes.SMALL_16,
        sizes.MEDIUM_24,
        sizes.MEDIUM_32,
        sizes.LARGE_48,
        sizes.XLARGE_64,
      ],
      control: { type: "select" },
    },
    spacing: {
      options: [spacings.DEFAULT, spacings.CONDENSED, spacings.SUPER_CONDENSED],
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Readme />
          <Stories />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args) => <AvatarBundle {...args} />;

export const Default = Template.bind({});

Default.args = {
  avatars: getAvatars(2),
  size: sizes.LARGE_48,
};

Default.storyName = "Two avatars";

export const ThreeAvatars = Template.bind({});

ThreeAvatars.args = {
  ...Default.args,
  avatars: getAvatars(3),
};

ThreeAvatars.storyName = "Three avatars";

export const MoreAvatars = Template.bind({});

MoreAvatars.args = {
  ...Default.args,
  avatars: getAvatars(65),
  showOverflowCount: true,
};

MoreAvatars.storyName = "65 avatars";

export const MaxAvatars = Template.bind({});

MaxAvatars.args = {
  ...MoreAvatars.args,
  avatars: getAvatars(110),
};

MaxAvatars.storyName = "110 avatars";
