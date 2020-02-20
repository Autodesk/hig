import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Surface from "./Surface";

describe("surface/Surface", () => {
  takeSnapshotsOf(Surface, [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with level",
      props: { level: 200 }
    },
    {
      description: "renders with horizontalPadding",
      props: { horizontalPadding: "s" }
    },
    {
      description: "renders with horizontalPadding",
      props: { verticalPadding: "s" }
    },
    {
      description: "renders with shadow",
      props: { shadow: "high" }
    },
    {
      description: "renders with borderRadius",
      props: { borderRadius: "s" }
    },
    {
      description: "renders with tagName",
      props: { tagName: "span" }
    },
    {
      description: "renders with custom className",
      props: { className: "test-classname" }
    }
  ]);
});
