import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";
import { Checkmark16 } from "@hig/icons";
import Badge from "./Badge";

describe("badge/Badge", () => {
  takeSnapshotsOf(Badge, [
    {
      desc: "renders with no props",
      props: {},
    },
    {
      desc: "renders with size",
      props: { size: "s" },
    },
    {
      desc: "renders dot variant",
      props: { variant: "dot" },
    },
    {
      desc: "renders icon variant",
      props: {
        icon: <Checkmark16 />,
        variant: "icon",
      },
    },
    {
      desc: "renders text variant",
      props: {
        label: "Test Label",
        variant: "text",
      },
    },
    {
      desc: "renders with color prop",
      props: { color: "green" },
    },
    {
      desc: "renders with custom color prop",
      props: {
        color: "custom",
        customColors: {
          backgroundColor: "#000",
          fontColor: "blue",
          iconColor: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    {
      desc: "renders with custom className",
      props: { className: "test-classname" },
    },
  ]);
});
