import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import SideNav from "../index";
import SideNavSkeleton from "../SideNavSkeleton";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav/Side nav skeleton",
  component: SideNav,
  subcomponents: { SideNavSkeleton },
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

const Template = () => <SideNavSkeleton />;

export const Default = Template.bind({});
