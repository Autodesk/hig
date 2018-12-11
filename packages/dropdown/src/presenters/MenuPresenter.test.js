import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import MenuPresenter from "./MenuPresenter";

describe("Dropdown/presenters/MenuPresenter", () => {
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    }
  };
  const cases = [
    {
      description: "renders with only required props",
      props: {
        innerRef: () => {}
      }
    },
    {
      description: "renders with all props",
      props: {
        innerRef: () => {},
        isOpen: true,
        children: <p key="p">hi</p>
      }
    }
  ];

  takeSnapshotsOf(MenuPresenter, cases, rendererOptions);
});
