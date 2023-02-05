import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import MenuPresenter from "./MenuPresenter";

describe("Dropdown/presenters/MenuPresenter", () => {
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    },
  };
  const cases = [
    {
      desc: "renders with only required props",
      props: {
        innerRef: () => {},
      },
    },
    {
      desc: "renders with all props",
      props: {
        innerRef: () => {},
        isOpen: true,
        children: <p key="p">hi</p>,
        className: "custom-class",
      },
    },
  ];

  takeSnapshotsOf(MenuPresenter, cases, rendererOptions);
});
