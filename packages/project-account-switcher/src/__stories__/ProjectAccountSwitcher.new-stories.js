import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import accountImage from "@weave-design/storybook/storybook-support/fixtures/account/dam.png";
import projectImage from "@weave-design/storybook/storybook-support/fixtures/project/architecture.png";

import ProjectAccountSwitcher from "../index";
import Readme from "../../README.md";

export default {
  title: "Legacy Components/ProjectAccountSwitcher",
  component: ProjectAccountSwitcher,
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args) => <ProjectAccountSwitcher {...args} />;

export const Default = Template.bind({});

Default.args = {
  accounts: [
    { id: "1", label: "Account 1" },
    { id: "2", label: "Account 2", image: accountImage },
  ],
  accountTitle: "Accounts",
  defaultAccount: "1",
  defaultProject: "2",
  projects: [
    { id: "1", label: "Project 1" },
    { id: "2", label: "Project 2", image: projectImage },
  ],
  projectTitle: "Projects",
};
