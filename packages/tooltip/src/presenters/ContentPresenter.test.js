import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import ContentPresenter from "./ContentPresenter";

describe("tooltip/presenters/ContentPresenter", () => {
  takeSnapshotsOf(ContentPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with children",
      props: {
        children: <span>Hello</span>,
      },
    },
  ]);
});
