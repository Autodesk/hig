import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { Collaboration24, Graph24, ProductsAndServices24 } from "@hig/icons";

import SideNav, { BelowTopNavCompact } from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav/Compact",
  component: SideNav,
  subcomponents: {
    BelowTopNavCompact,
    "SideNav.ModuleCompact": SideNav.ModuleCompact,
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

const compactSideNav = () => (
  <SideNav
    groups={
      <SideNav.Group>
        <SideNav.ModuleCompact
          title="Module 1"
          icon={<Graph24 />}
          activeChildren
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" active />
        </SideNav.ModuleCompact>
        <SideNav.ModuleCompact
          title="Module 2"
          icon={<ProductsAndServices24 />}
          minimized
        >
          <SideNav.Submodule title="Submodule 1" />
          <SideNav.Submodule title="Submodule 2" />
        </SideNav.ModuleCompact>
        <SideNav.ModuleCompact
          title="Module 3"
          icon={<Collaboration24 />}
          link="https://www.autodesk.com"
          target="_blank"
        />
      </SideNav.Group>
    }
  />
);

const Template = (args, context) => {
  if (context.story === "Positioned below the top nav") {
    return <BelowTopNavCompact>{compactSideNav()}</BelowTopNavCompact>;
  }
  return compactSideNav();
};

export const Default = Template.bind({});

Default.storyName = "With compact modules";

export const PositionedBelowTheTopNav = Template.bind({});

PositionedBelowTheTopNav.storyName = "Positioned below the top nav";
