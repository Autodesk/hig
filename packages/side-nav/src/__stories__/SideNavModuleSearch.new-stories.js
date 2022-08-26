import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import SideNav from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy Components/SideNav/Subcomponents/Search",
  component: SideNav.Search,
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

const Template = (args) => <SideNav.Search {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Placeholder Text",
};
