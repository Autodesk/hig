import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";

import SkeletonItem from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Skeleton item",
  component: SkeletonItem,
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

const Template = (args) => <SkeletonItem {...args} />;

export const Default = Template.bind({});
