import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import PanelPresenter from "./PanelPresenter";

describe("tooltip/presenters/PanelPresenter", () => {
  takeSnapshotsOf(PanelPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        innerRef: function handleRef() {},
        children: "Hello",
        maxHeight: 42,
        onScroll: function handleScroll() {}
      }
    }
  ]);
});
