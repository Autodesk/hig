import React from "react";
import { storiesOf } from "@storybook/react";
import ProjectAccountSwitcherPresenter from "../presenters/ProjectAccountSwitcherPresenter";

storiesOf("ProjectAccountSwitcherPresenter", module)
  .add("default", () => (
    <ProjectAccountSwitcherPresenter label={"Default ProjectAccountSwitcher"} />
  ))
  .add("open", () => <ProjectAccountSwitcherPresenter open />);
