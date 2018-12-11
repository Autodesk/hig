import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Submodule from "./Submodule";

describe("side-nav/Submodule", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(Submodule, [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders with minimal props",
        props: {
          title: "Module"
        }
      },
      {
        description: "renders an external link",
        props: {
          link: "http://example.com",
          target: "_blank",
          title: "Module"
        }
      },
      {
        description: "renders a link",
        props: {
          link: "http://example.com",
          title: "Module"
        }
      },
      {
        description: "renders with a click handler",
        props: {
          onClick: function handleClick() {}
        }
      }
    ]);
  });
});
