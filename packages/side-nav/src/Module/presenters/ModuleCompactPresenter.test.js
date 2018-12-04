import React from "react";
import { Collaboration24 } from "@hig/icons";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ModuleCompactPresenter from "./ModuleCompactPresenter";

describe("side-nav/Module/presenters/ModuleCompactPresenter", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(ModuleCompactPresenter, [
      {
        desc: "renders with minimal props",
        props: {
          icon: <Collaboration24 />
        }
      }
    ]);
  });
});
