import React from "react";
import { css } from "emotion";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import avatarImagePath from "@weave-design/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import Avatar from "../index";
import { sizes } from "../sizes";
import { COLOR_VARIANT_COUNT } from "../Avatar";

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

const Template = (args, context) => {
  if (context.story === "All background colors") {
    const avatarArray = [];
    for (let i = 0; i < COLOR_VARIANT_COUNT; i += 1) {
      avatarArray.push(
        <div className={css({ padding: "10px", height: "48px" })} key={i}>
          <Avatar
            {...args}
            firstName={String.fromCharCode(105 + i)} // calculates backgroundIdFromName() = 1 at start
            lastName=""
          />
        </div>
      );
    }

    return (
      <div className={css({ display: "flex", flexWrap: "wrap" })}>
        {avatarArray}
      </div>
    );
  }

  return <Avatar {...args} />;
};

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

export const AllBackgroundColors = Template.bind({});

AllBackgroundColors.storyName = "All background colors";
