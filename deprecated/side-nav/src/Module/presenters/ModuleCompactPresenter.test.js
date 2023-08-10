import React from "react";
import { Collaboration24 } from "@weave-design/icons";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import ModuleCompactPresenter from "./ModuleCompactPresenter";

describe("side-nav/Module/presenters/ModuleCompactPresenter", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(ModuleCompactPresenter, [
      {
        desc: "renders with minimal props",
        props: {
          icon: <Collaboration24 />,
        },
      },
    ]);
  });
});
