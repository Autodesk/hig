import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { Graph24 } from "@hig/icons";

import SideNav from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy components/Side nav/Subcomponents/Module",
  component: SideNav.Module,
  subcomponents: { Submodule: SideNav.Submodule },
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

const Template = (args, context) => {
  if (context.story === "With submodule") {
    return (
      <SideNav.Module {...args}>
        <SideNav.Submodule title="Submodule 1" />
        <SideNav.Submodule title="Submodule 2" />
      </SideNav.Module>
    );
  }
  return <SideNav.Module {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  link: "https://www.autodesk.com",
  target: "_self",
  title: "Module",
};

export const WithIcon = Template.bind({});

WithIcon.storyName = "With icon";
WithIcon.args = {
  ...Default.args,
  icon: <Graph24 />,
};

export const WithSubmodule = Template.bind({});

WithSubmodule.storyName = "With submodule";
WithSubmodule.args = { ...WithIcon.args };
