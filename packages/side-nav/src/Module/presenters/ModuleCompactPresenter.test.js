import React from "react";
import Icon, { names as iconNames } from "@hig/icon";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ModuleCompactPresenter from "./ModuleCompactPresenter";

describe("side-nav/Module/presenters/ModuleCompactPresenter", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(ModuleCompactPresenter, [
      {
        desc: "renders with minimal props",
        props: {
          icon: <Icon name={iconNames.COLLABORATION} />
        }
      }
    ]);
  });
});
