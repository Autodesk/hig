import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Submodule from "./Submodule";

describe("side-nav/Submodule", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(Submodule, [
      {
        desc: "renders with no props",
        props: {},
      },
      {
        desc: "renders with minimal props",
        props: {
          title: "Module",
        },
      },
      {
        desc: "renders an external link",
        props: {
          link: "http://example.com",
          target: "_blank",
          title: "Module",
        },
      },
      {
        desc: "renders a link",
        props: {
          link: "http://example.com",
          title: "Module",
        },
      },
      {
        desc: "renders with a click handler",
        props: {
          onClick: function handleClick() {},
        },
      },
    ]);
  });
});
