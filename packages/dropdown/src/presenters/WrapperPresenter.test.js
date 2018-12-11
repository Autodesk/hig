import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import WrapperPresenter from "./WrapperPresenter";

describe("Dropdown/presenters/WrapperPresenter", () => {
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    }
  };
  const cases = [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        disabled: true,
        children: <p key="p">hi</p>
      }
    }
  ];

  takeSnapshotsOf(WrapperPresenter, cases, rendererOptions);
});
