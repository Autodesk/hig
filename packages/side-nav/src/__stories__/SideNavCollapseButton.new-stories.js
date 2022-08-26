import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { css } from "emotion";

import SideNav from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy Components/SideNav/Subcomponents/CollapseButton",
  component: SideNav.CollapseButton,
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

const Template = (args) => (
  <div className={css({ width: "30px" })}>
    <SideNav.CollapseButton {...args} />
  </div>
);

export const Default = Template.bind({});
