import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressRing from "../index";

storiesOf("ProgressRing", module)
  .add("determinate default", () => <ProgressRing percentComplete={33} />)
  .add("determinate extra small", () => (
    <ProgressRing percentComplete={33} size={"xs"} />
  ))
  .add("determinate small", () => (
    <ProgressRing percentComplete={33} size={"s"} />
  ))
  .add("determinate medium", () => (
    <ProgressRing percentComplete={33} size={"m"} />
  ))
  .add("determinate large", () => (
    <ProgressRing percentComplete={33} size={"l"} />
  ))
  .add("determinate extra large", () => (
    <ProgressRing percentComplete={33} size={"xl"} />
  ))
  .add("indeterminate", () => <ProgressRing />);
