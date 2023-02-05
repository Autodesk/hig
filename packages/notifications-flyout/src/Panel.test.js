import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import Panel from "./Panel";

describe("notifications-flyout/Panel", () => {
  function handleRef() {}

  takeSnapshotsOf(Panel, [
    {
      desc: "renders without props",
      props: {
        innerRef: handleRef,
      },
    },
    {
      desc: "renders with all props",
      props: {
        children: "foobar",
        heading: "hello",
        innerRef: handleRef,
        loading: true,
        onScroll: function handleScroll() {},
      },
    },
  ]);
});
