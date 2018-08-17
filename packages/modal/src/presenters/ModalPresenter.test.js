import React from "react";
import { generateId } from "@hig/utils";
import { takeSnapshotsOf } from "../../../jest-preset/helpers";
import ModalHeaderPresenter from "./ModalHeaderPresenter";

describe("checkbox/presenters/ModalPresenter", () => {
  afterEach(() => {
    generateId.mockReset();
  });

  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with header children",
      props: {
        children: [<p key="p">Body</p>],
        headerChildren: [<h1 key="h1">Title</h1>],
        onCloseClick: function onCloseClick() {}
      }
    },
    {
      description: "renders with all props",
      props: {
        children: [<p key="p">Body</p>],
        title: "Title",
        type: "alternate",
        onCloseClick: function onCloseClick() {}
      }
    }
  ].forEach(({ desc, props }) => {
    takeSnapshotsOf(ModalHeaderPresenter, [{ desc, props }]);
  });
});
