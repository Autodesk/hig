import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { Graph24 } from "@hig/icons";

import SideNav from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav/Subcomponents/Module compact",
  component: SideNav.ModuleCompact,
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

const Template = (args) => <SideNav.ModuleCompact {...args} />;

export const Default = Template.bind({});

Default.args = { icon: <Graph24 /> };
