import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { generateId } from "@hig/utils";
import ModalHeaderPresenter from "./ModalHeaderPresenter";

describe("modal/presenters/ModalHeaderPresenter", () => {
  const styles = { header: {}, headerContent: {} };

  afterEach(() => {
    generateId.mockReset();
  });

  [
    {
      desc: "renders without props",
      props: { styles }
    },
    {
      desc: "renders with children",
      props: {
        children: [<p key="p">Title</p>],
        styles
      }
    },
    {
      desc: "renders with all props",
      props: {
        title: "HELLO",
        onCloseClick: function onCloseClick() {},
        styles
      }
    }
  ].forEach(({ desc, props }) => {
    takeSnapshotsOf(ModalHeaderPresenter, [{ desc, props }]);
  });
});
