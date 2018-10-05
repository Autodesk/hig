import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressRing from "../index";

storiesOf("ProgressRing", module)
  .add("determinate default", () => <ProgressRing percentComplete={10} />)
  .add("determinate extra small", () => (
    <ProgressRing percentComplete={10} size="xs" />
  ))
  .add("determinate small", () => (
    <ProgressRing percentComplete={10} size="s" />
  ))
  .add("determinate medium", () => (
    <ProgressRing percentComplete={10} size="m" />
  ))
  .add("determinate large", () => (
    <ProgressRing percentComplete={10} size="l" />
  ))
  .add("determinate extra large", () => (
    <ProgressRing percentComplete={10} size="xl" />
  ))
  .add("indeterminate", () => <ProgressRing />);
