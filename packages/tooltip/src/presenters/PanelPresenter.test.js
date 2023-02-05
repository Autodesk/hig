import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import PanelPresenter from "./PanelPresenter";

describe("tooltip/presenters/PanelPresenter", () => {
  takeSnapshotsOf(PanelPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        innerRef: function handleRef() {},
        children: "Hello",
        maxHeight: 42,
        onScroll: function handleScroll() {},
      },
    },
  ]);
});
