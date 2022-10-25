import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import SideNav from "../index";
import ExampleSideNav from "./ExampleSideNav";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav",
  component: SideNav,
  subcomponents: {
    "SideNav.Group": SideNav.Group,
    "SideNav.Link": SideNav.Link,
    "SideNav.Module": SideNav.Module,
    "SideNav.Search": SideNav.Search,
    "SideNav.Submodule": SideNav.Submodule,
  },
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

const Template = (args) => <ExampleSideNav {...args} />;

export const Default = Template.bind({});

Default.args = {
  headerLabel: "Storybook",
  headerLink: "https://www.autodesk.com",
  superHeaderLabel: "HIG",
  superHeaderLink: "https://www.autodesk.com",
};
