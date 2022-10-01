import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TilePresenter from "./TilePresenter";

describe("tile/TilePresenter", () => {
  const imgSrc = "https://d95xa459ljwvg.cloudfront.net/theme/weave-logo.svg";
  const props = {
    background: "filled",
    media: <div><img src={imgSrc} /></div>,
    title: "Tile title",
  };
  takeSnapshotsOf(TilePresenter, [
    {
      desc: "renders when hovered",
      props: { ...props, hasHover: true },
    },
    {
      desc: "renders when focused",
      props: { ...props, hasFocus: true },
    },
    {
      desc: "renders when pressed",
      props: { ...props, isPressed: true },
    },
  ]);
});
