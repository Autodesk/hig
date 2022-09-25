import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import thumbnailImagePath from "@weave-design/storybook/storybook-support/fixtures/thumbnail/thumbnail-placeholder-02.jpg";

import Thumbnail from "../index";
import Readme from "../../README.md";
import {
  AVAILABLE_FITS,
  AVAILABLE_RATIOS,
  AVAILABLE_SIZES,
} from "../constants";

export default {
  title: "Basics/Thumbnail",
  component: Thumbnail,
  argTypes: {
    size: {
      options: AVAILABLE_SIZES,
      control: "select",
    },
    fit: {
      options: AVAILABLE_FITS,
      control: "select",
    },
    aspectRatio: {
      options: AVAILABLE_RATIOS,
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

const Template = (args) => <Thumbnail {...args} />;

export const Default = Template.bind({});

Default.args = {
  aspectRatio: "fullscreen",
  fit: "contain",
  src: thumbnailImagePath,
  size: "m",
};
