import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ProjectAccountSwitcher from "../index";
import infoOptions from "./infoOptions";

storiesOf("ProgressAccountSwitcher", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <div style={{ fontFamily: "ArtifaktElement" }}>
      {/* @TODO: Remove wrapper when component is ported */}
      <ProjectAccountSwitcher
        projects={[{ label: "Project 1" }, { label: "Project 2" }]}
        accounts={[{ label: "Account 1" }, { label: "Account 2" }]}
      />
    </div>
  ))
);
