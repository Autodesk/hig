import React from "react";
import { storiesOf } from "@storybook/react";
import ProjectAccountSwitcherPresenter from "../presenters/ProjectAccountSwitcherPresenter";

storiesOf("ProjectAccountSwitcherPresenter", module)
  .add("default", () => (
    <ProjectAccountSwitcherPresenter
      accounts={[{ id: "1", label: "Account 1" }]}
      activeAccountId="1"
      activeProjectId="1"
      projects={[{ id: "1", label: "Project 1" }]}
    />
  ))
  .add("open", () => (
    <ProjectAccountSwitcherPresenter
      open
      accounts={[{ id: "1", label: "Account 1" }]}
      activeAccountId="1"
      activeProjectId="1"
      projects={[{ id: "1", label: "Project 1" }]}
    />
  ));
