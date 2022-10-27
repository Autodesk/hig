import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { Collaboration24, Graph24, ProductsAndServices24 } from "@hig/icons";

import SideNav from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav/Subcomponents/Group",
  component: SideNav.Group,
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

const Template = () => (
  <SideNav.Group>
    <SideNav.Module title="Module 1" icon={<Graph24 />} activeChildren>
      <SideNav.Submodule title="Submodule 1" />
      <SideNav.Submodule title="Submodule 2" active />
    </SideNav.Module>
    <SideNav.Module title="Module 2" icon={<ProductsAndServices24 />} minimized>
      <SideNav.Submodule title="Submodule 1" />
      <SideNav.Submodule title="Submodule 2" />
    </SideNav.Module>
    <SideNav.Module
      title="Module 3"
      icon={<Collaboration24 />}
      link="https://www.autodesk.com"
      target="_blank"
    />
  </SideNav.Group>
);

export const Default = Template.bind({});
