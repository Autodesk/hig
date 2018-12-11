import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Panel from "./Panel";

describe("notifications-flyout/Panel", () => {
  function handleRef() {}

  takeSnapshotsOf(Panel, [
    {
      description: "renders without props",
      props: {
        innerRef: handleRef
      }
    },
    {
      description: "renders with all props",
      props: {
        children: "foobar",
        heading: "hello",
        innerRef: handleRef,
        loading: true,
        onScroll: function handleScroll() {}
      }
    }
  ]);
});
