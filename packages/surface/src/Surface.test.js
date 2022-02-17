import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Surface from "./Surface";

describe("surface/Surface", () => {
  takeSnapshotsOf(Surface, [
    {
      desc: "renders with no props",
      props: {}
    },
    {
      desc: "renders with level",
      props: { level: 200 }
    },
    {
      desc: "renders with horizontalPadding",
      props: { horizontalPadding: "s" }
    },
    {
      desc: "renders with horizontalPadding",
      props: { verticalPadding: "s" }
    },
    {
      desc: "renders with shadow",
      props: { shadow: "high" }
    },
    {
      desc: "renders with borderRadius",
      props: { borderRadius: "s" }
    },
    {
      desc: "renders with tagName",
      props: { tagName: "span" }
    },
    {
      desc: "renders with custom className",
      props: { className: "test-classname" }
    }
  ]);
});
