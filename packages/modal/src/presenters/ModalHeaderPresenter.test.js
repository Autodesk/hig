import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { generateId } from "@hig/utils";
import ModalHeaderPresenter from "./ModalHeaderPresenter";

describe("checkbox/presenters/ModalHeaderPresenter", () => {
  afterEach(() => {
    generateId.mockReset();
  });

  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with children",
      props: {
        children: [<p key="p">Title</p>]
      }
    },
    {
      description: "renders with all props",
      props: {
        title: "HELLO",
        onCloseClick: function onCloseClick() {}
      }
    }
  ].forEach(({ desc, props }) => {
    takeSnapshotsOf(ModalHeaderPresenter, [{ desc, props }]);
  });
});
