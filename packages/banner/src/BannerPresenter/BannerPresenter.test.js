import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import { types } from "../types";
import BannerPresenter from "./BannerPresenter";

describe("banner/BannerPresenter/BannerPresenter", () => {
  takeSnapshotsOf(BannerPresenter, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with a label",
      props: {
        type: types.URGENT,
        label: "HELLO",
        children: "World"
      }
    },
    {
      desc: "renders with a string as actions",
      props: {
        actions: "foobar"
      }
    },
    {
      desc: "renders with a node as actions",
      props: {
        dismissButtonTitle: "boom",
        actions: <span>foo</span>
      }
    },
    {
      desc: "renders with a fragment as actions",
      props: {
        actions: [<span key="0">bar</span>, <div key="1">baz</div>]
      }
    },
    {
      desc: "renders with onDismiss function",
      props: {
        onDismiss: () => {}
      }
    },
    {
      desc: "renders without onDismiss function",
      props: {
        onDismiss: null
      }
    }
  ]);
});
