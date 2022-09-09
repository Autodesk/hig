import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import SideNav from "../index";
import SideNavSkeleton from "../SideNavSkeleton";
import Readme from "../../README.md";

export default {
  title: "Legacy Components/SideNav/SideNavSkeleton",
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
