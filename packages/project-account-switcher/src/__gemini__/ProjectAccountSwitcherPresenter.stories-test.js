import React from "react";
import { storiesOf } from "@storybook/react";
import ProjectAccountSwitcherPresenter from "../presenters/ProjectAccountSwitcherPresenter";

import "./ProjectAccountSwitcher.stories-test.scss";

storiesOf("ProjectAccountSwitcherPresenter", module)
  .add("default", () => (
    <ProjectAccountSwitcherPresenter
      accounts={[{ id: "1", label: "Account 1" }]}
      activeAccount={{ id: "1", label: "Account 1" }}
      activeProject={{ id: "1", label: "Project 1" }}
      projects={[{ id: "1", label: "Project 1" }]}
    />
  ))
  .add("open", () => (
    <ProjectAccountSwitcherPresenter
      open
      accounts={[{ id: "1", label: "Account 1" }]}
      activeAccount={{ id: "1", label: "Account 1" }}
      activeProject={{ id: "1", label: "Project 1" }}
      projects={[{ id: "1", label: "Project 1" }]}
    />
  ));
