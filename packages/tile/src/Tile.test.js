import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Tile from "./Tile";

describe("tile/Tile", () => {
  const imgSrc = "https://d95xa459ljwvg.cloudfront.net/theme/weave-logo.svg";
  const props = {
    media: (
      <div>
        <img src={imgSrc} alt="alt text" />
      </div>
    ),
    title: "Tile title",
  };
  takeSnapshotsOf(Tile, [
    {
      desc: "renders with minimum required props",
      props: { ...props },
    },
    {
      desc: "renders with a subtitle",
      props: { ...props, subtitle: "Subtitle text" },
    },
    {
      desc: "renders when disabled",
      props: { ...props, disabled: true },
    },
    {
      desc: "renders with an empty background",
      props: { ...props, background: "empty" },
    },
    {
      desc: "renders with a set content width",
      props: { ...props, contentWidth: "300px" },
    },
    {
      desc: "renders with a divider",
      props: { ...props, divider: true },
    },
    {
      desc: "renders with a horizontal orientation",
      props: { ...props, orientation: "horizontal" },
    },
    {
      desc: "renders when selected",
      props: { ...props, selected: true },
    },
    {
      desc: "renders with surface leve >= 300",
      props: { ...props, surface: 300 },
    },
  ]);
});
