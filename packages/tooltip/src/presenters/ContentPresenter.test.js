import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ContentPresenter from "./ContentPresenter";

describe("tooltip/presenters/ContentPresenter", () => {
  takeSnapshotsOf(ContentPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with children",
      props: {
        children: <span>Hello</span>
      }
    }
  ]);
});
