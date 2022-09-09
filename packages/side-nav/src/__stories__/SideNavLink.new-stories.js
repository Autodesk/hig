import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";

import SideNav from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy Components/SideNav/Subcomponents/Link",
  component: SideNav.Link,
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

const Template = (args) => <SideNav.Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "SideNav Link",
  link: "https://www.autodesk.com",
  target: "_blank",
};
