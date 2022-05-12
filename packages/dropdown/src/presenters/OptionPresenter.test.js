import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import OptionPresenter from "./OptionPresenter";

describe("Dropdown/presenters/OptionPresenter", () => {
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    },
  };
  const cases = [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        highlighted: true,
        onClick: () => {},
        onMouseDown: () => {},
        onMouseMove: () => {},
        selected: true,
        children: <p key="p">hi</p>,
      },
    },
  ];

  takeSnapshotsOf(OptionPresenter, cases, rendererOptions);
});
