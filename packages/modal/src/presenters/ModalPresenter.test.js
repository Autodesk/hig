import React from "react";
import { generateId } from "@hig/utils";
import { takeSnapshotsOf } from "../../../jest-preset/helpers";
import ModalHeaderPresenter from "./ModalHeaderPresenter";

describe("modal/presenters/ModalPresenter", () => {
  const styles = {
    backgroundColor: "aliceblue",
    header: {},
    headerContent: {}
  };

  afterEach(() => {
    generateId.mockReset();
  });

  [
    {
      desc: "renders without props",
      props: { styles }
    },
    {
      desc: "renders with header children",
      props: {
        children: [<p key="p">Body</p>],
        headerChildren: [<h1 key="h1">Title</h1>],
        onCloseClick: function onCloseClick() {},
        styles
      }
    },
    {
      desc: "renders with all props",
      props: {
        children: [<p key="p">Body</p>],
        onCloseClick: function onCloseClick() {},
        styles,
        title: "Title",
        type: "alternate"
      }
    }
  ].forEach(({ desc, props }) => {
    takeSnapshotsOf(ModalHeaderPresenter, [{ desc, props }]);
  });
});
